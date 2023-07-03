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
