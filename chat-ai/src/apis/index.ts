import { useMutation } from "@vigilio/preact-fetching";
import type { ChatIA } from "../hooks/useChat";
import { generateSignature } from "../helpers";
import configVigilio from "../config";

// const token = (socket.handshake.query?.["x-token"] as string) ?? "null";
// const vigilioToken =
//     (socket.handshake.query?.["x-vigilio-token"] as string) ?? "null";

interface AiChatApiProps {
    base_url: string;
}
export function aiChatApi({ base_url }: AiChatApiProps) {
    return useMutation<
        AIProductApi,
        { token: string; initial_message: string },
        AISendMessageApiError
    >("/api/ia/chat", async (url, body) => {
        const params = new URLSearchParams();
        params.set("token", body.token);
        params.set("initial_message", body.initial_message);

        const { signature, timestamp } = await generateSignature(
            "GET",
            `${url}?${params}`
        );

        params.set("x-timestamp", timestamp.toString());
        params.set("x-signature", signature);
        const response = await fetch(`${base_url}${url}?${params}`);
        const result: AIProductApi = await response.json();
        if (!result.success) throw result;
        return result;
    });
}
interface AIProductApi {
    success: true;
    chats: ChatIA[];
    isPlus: boolean;
}
interface AISendMessageApiError {
    success: true;
    message: string;
}
// chat test

export function aiChatTestApi() {
    return useMutation<
        AIProductApi,
        { test_url: string; token: string; initial_message: string },
        AISendMessageApiError
    >("/api/chat-ai", async (url, body) => {
        const params = new URLSearchParams();
        params.set("test_url", body.test_url);
        params.set("token", body.token);
        params.set("initial_message", body.initial_message);
        const { signature, timestamp } = await generateSignature(
            "GET",
            `${url}?${params}`
        );

        params.set("x-timestamp", timestamp.toString());
        params.set("x-signature", signature);
        const response = await fetch(
            `${configVigilio.vigilio_services_url}${url}?${params}`
        );
        const result: AIProductApi = await response.json();
        if (!result.success) throw result;
        return result;
    });
}
interface AIProductApi {
    success: true;
    chats: ChatIA[];
}
interface AISendMessageApiError {
    success: true;
    message: string;
}
