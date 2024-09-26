import { type NextFunction, type Request, type Response } from "express";
class SimpleCache {
    private cache: Record<string, { value: string; expire: number | null }>;

    constructor() {
        this.cache = {};
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
}
export function cacheMiddleware() {
    return (_req: Request, _res: Response, next: NextFunction) => {
        if (process.env.NODE_ENV === "development") {
            console.log({ caches: Object.keys(cache.all()) });
        }
        next();
    };
}
const cache = new SimpleCache();
export default cache;
