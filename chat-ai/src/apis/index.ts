import { useMutation } from "@vigilio/preact-fetching";
import { ChatIA } from "../hooks/useChat";
import { generateSignature } from "../helpers";

// const token = (socket.handshake.query?.["x-token"] as string) ?? "null";
// const vigilioToken =
//     (socket.handshake.query?.["x-vigilio-token"] as string) ?? "null";

interface AiChatApiProps {
    base_url: string;
}
export function aiChatApi({ base_url }: AiChatApiProps) {
    return useMutation<AIProductApi, { token: string }, AISendMessageApiError>(
        "/api/ia/chat",
        async (url, body) => {
            const params = new URLSearchParams();
            params.set("token", body.token);

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
        }
    );
}
interface AIProductApi {
    success: true;
    chats: ChatIA[];
}
interface AISendMessageApiError {
    success: true;
    message: string;
}
