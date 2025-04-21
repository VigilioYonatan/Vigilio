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

export function sanitizeResponse(html: string) {
    return html
        .replace(/<script.*?>.*?<\/script>/gi, "") // Elimina scripts
        .replace(/on\w+=".*?"/g, ""); // Elimina event handlers
}

export async function generateSignature(method: string, path: string) {
    const timestamp = Date.now();
    const dataToSign = `${timestamp}:${method}:${path}`;
    return {
        signature: (
            await generateHMAC(dataToSign, "VIGILIO_SERVICES_CHAT_AI_SIGN")
        ).toString(),
        timestamp: timestamp.toString(),
    };
}
async function generateHMAC(message: string, secretKey: string) {
    const encoder = new TextEncoder();
    const keyData = encoder.encode(secretKey);
    const messageData = encoder.encode(message);
    const key = await crypto.subtle.importKey(
        "raw",
        keyData,
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign"]
    );
    const signature = await crypto.subtle.sign("HMAC", key, messageData);
    const hex = Array.from(new Uint8Array(signature))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");

    return hex;
}
