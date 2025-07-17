import { type NextFunction, type Request, type Response } from "express";
interface PropsSimpleCache {
    maxSize?: number | null;
    autoCleanTime?: number | null;
    log?: boolean;
}
/**
 * @prop {Object} config - Configuration options for the cache.
 * @prop {number} config.maxSize - Maximum number of keys allowed in the cache.
 * @prop {number} config.autoCleanTime - Time interval (in ms) for automatic cache cleanup of keys with timers.
 * @prop {boolean} config.log - Whether to log cache statistics (only in development mode, NODE_ENV === "development").
 */
class SimpleCache {
    private cache: Record<string, { value: string; expire: number | null }>;
    private maxSize: number;
    private cleanInterval: NodeJS.Timeout | null;
    initial(props: PropsSimpleCache | undefined = undefined) {
        const defaultProps: PropsSimpleCache = {
            maxSize: null,
            autoCleanTime: null,
            log: true,
        };
        const propsClean: PropsSimpleCache = {
            ...defaultProps,
            ...(props || {}),
        };
        this.cache = {};
        this.maxSize = propsClean.maxSize;
        this.cleanInterval = null;

        // Iniciar limpieza automática cada cleanIntervalMs (por defecto, cada 60 segundos)
        if (propsClean.autoCleanTime && propsClean.autoCleanTime > 0) {
            this.startAutoClean(propsClean.autoCleanTime * 1000);
        }
    }
    all() {
        return this.cache;
    }
    set(key: string, value: string, seconds: number | null = null) {
        const expire = seconds ? Date.now() + seconds : null;
        this.cache[key] = { value, expire };
    }

    get(key: string) {
        const item = this.cache[key];
        if (item && (!item.expire || Date.now() < item.expire)) {
            return item.value;
        }
        this.delete(key);
        return null;
    }

    delete(key: string, isStart = false) {
        if (isStart) {
            for (const cache of Object.keys(this.cache)) {
                if (cache.startsWith(key)) {
                    delete this.cache[key];
                }
            }
            return;
        }
        if (key in this.cache) {
            delete this.cache[key];
        }
    }

    clear() {
        this.cache = {};
    }
    private startAutoClean(intervalMs: number) {
        this.cleanInterval = setInterval(() => {
            this.autoClean();
        }, intervalMs);
    }

    stopAutoClean() {
        if (this.cleanInterval) {
            clearInterval(this.cleanInterval);
            this.cleanInterval = null;
        }
    }

    private autoClean() {
        const now = Date.now();
        let size = Object.keys(this.cache).length;

        for (const key of Object.keys(this.cache)) {
            const item = this.cache[key];
            if (item.expire && now >= item.expire) {
                delete this.cache[key];
                size--;
            }
        }
        if (this.maxSize) {
            while (size > this.maxSize) {
                this.clearOldest();
                size--;
            }
        }
    }

    private clearOldest() {
        const oldestKey = Object.keys(this.cache)[0];
        if (oldestKey) {
            delete this.cache[oldestKey];
        }
    }
    getState() {
        const allCache = this.all();
        let totalSize = 0;
        let keys = {};
        Object.entries(allCache).forEach(([key, stringifiedValue]) => {
            const sizeInBytes = Buffer.byteLength(
                JSON.stringify(stringifiedValue),
                "utf8"
            );
            const sizeInMB = (sizeInBytes / 1024 / 1024).toFixed(2);
            totalSize += sizeInBytes;
            keys = { ...keys, [key]: sizeInBytes };
            console.log(`[🧠 ${key}] | Size: ${sizeInMB} MB`);
        });
        console.log(
            `[📦 Total cache size] | ${(totalSize / 1024 / 1024).toFixed(2)} MB`
        );
        return {
            totalSize,
            keys,
        };
    }
}
const cache = new SimpleCache();
export function simpleCache(props: PropsSimpleCache) {
    cache.initial(props);
    return (_: Request, _2: Response, next: NextFunction) => {
        if (process.env.NODE_ENV === "development" && props.log) {
            cache.getState();
        }
        return next();
    };
}
export default cache;
