import { generateSignature } from "../helpers";
import { useMutation } from "@vigilio/preact-fetching";

interface usersFormStoreApiProps {
    base_url: string;
}
export function usersFormStoreApi({ base_url }: usersFormStoreApiProps) {
    return useMutation<
        AIProductApi,
        {
            api_key: string;
            name: string;
            telephone: string;
            email: string;
        },
        AISendMessageApiError
    >("/api/users-form", async (url, body) => {
        const { signature, timestamp } = await generateSignature("POST", url);

        const response = await fetch(`${base_url}${url}`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "x-timestamp": timestamp.toString(),
                "x-signature": signature,
                "Content-Type": "application/json",
            },
        });
        const result: AIProductApi = await response.json();
        if (!result.success) throw result;
        return result;
    });
}
interface AIProductApi {
    success: true;
    message: string;
}
interface AISendMessageApiError {
    success: true;
    message: string;
}
