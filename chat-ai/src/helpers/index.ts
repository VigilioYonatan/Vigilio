export function generateId() {
    return (Date.now().toString(32) + Math.random().toString(32)).slice(4);
}
export function removeTextHTML(value: string) {
    return value
        ? value
              .replace(/<img[^>]*src="[^"]*"[^>]*>/gi, "")
              .replace(/(<([^>]+)>)/gi, "")
        : null;
}
