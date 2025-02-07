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
    private cache: Record<string, { value: string; expire: number | null }>;

    constructor() {
        this.cache = {};
    }
    all() {
        return JSON.parse(localStorage.getItem("cache_api") || "{}");
    }
    set(key: string, value: unknown, seconds: number | null = null) {
        const expire = seconds ? Date.now() + seconds : null;
        const all = this.all();
        localStorage.setItem(
            "cache_api",
            JSON.stringify({
                ...all,
                [key]: {
                    value,
                    expire,
                },
            })
        );
    }

    get(key: string) {
        const item = this.all()?.[key];
        if (item && (!item.expire || Date.now() < item.expire)) {
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
                    localStorage.setItem(
                        "cache_api",
                        JSON.stringify(items || {})
                    );
                }
            }
            return;
        }
        if (key in this.cache) {
            delete items[key];
            localStorage.setItem("cache_api", JSON.stringify(items || {}));
        }
    }

    clear() {
        localStorage.setItem("cache_api", JSON.stringify({}));
    }
}
export const cache = new SimpleCache();
