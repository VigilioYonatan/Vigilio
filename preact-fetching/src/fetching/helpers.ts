// helpers
export async function delayFetch(seg: number) {
    return new Promise((res) => {
        setTimeout(() => {
            res(true);
        }, seg);
    });
}

export function timer(seg: number) {
    return seg * 1000;
}
class SimpleCache {
    private cache: Record<
        string,
        {
            value: unknown;
            expire: number | null;
            max_count: number | null;
            count: number;
        }
    >;

    private isCache: boolean;
    constructor(isCache: boolean) {
        this.cache = {};
        this.isCache = isCache;
    }
    all() {
        return this.isCache
            ? JSON.parse(localStorage.getItem("cache_api") || "{}")
            : this.cache;
    }
    set(
        key: string,
        value: unknown,
        seconds: number | null = null,
        max_count: number | null = null
    ) {
        const expire = seconds ? Date.now() + seconds : null;
        const all = this.all();
        this.cache = {
            ...this.cache,
            [key]: { value, expire, count: 0, max_count },
        };
        if (this.isCache) {
            localStorage.setItem(
                "cache_api",
                JSON.stringify({
                    ...all,
                    [key]: {
                        value,
                        expire,
                        count: 0,
                        max_count,
                    },
                })
            );
        }
    }

    get(key: string) {
        const item = this.all()?.[key];
        if (item && (!item.expire || Date.now() < item.expire)) {
            return item.value;
        }
        if (item?.max_count) {
            const newAccessCount = (item.count || 0) + 1;
            // Actualizar el contador en el cache
            const all = this.all();
            if (this.isCache) {
                localStorage.setItem(
                    "cache_api",
                    JSON.stringify({
                        ...all,
                        [key]: {
                            ...item,
                            count: newAccessCount,
                        },
                    })
                );
            } else {
                this.cache = {
                    ...this.cache,
                    [key]: { ...item, count: newAccessCount },
                };
            }

            // Verificar si se alcanzó el límite de accesos
            if (newAccessCount >= item.max_count) {
                this.delete(key);
                return item.value; // Devolver el valor antes de eliminarlo
            }
            return item.value;
        }
        this.delete(key);
        return null;
    }

    delete(key: string, isStart = false) {
        const items = this.all();
        if (isStart) {
            for (const cache of Object.keys(items)) {
                if (cache.startsWith(key)) {
                    delete items[key];
                    if (this.isCache) {
                        localStorage.setItem(
                            "cache_api",
                            JSON.stringify(items || {})
                        );
                    }
                }
            }
            return;
        }
        if (key in this.cache) {
            delete items[key];
            if (this.isCache) {
                localStorage.setItem("cache_api", JSON.stringify(items || {}));
            }
        }
    }

    clear() {
        this.cache = {};
        if (this.isCache) {
            localStorage.setItem("cache_api", JSON.stringify({}));
        }
    }
}
export const cache = new SimpleCache(true);
export const memory = new SimpleCache(false);
