import { signal } from "@preact/signals";
import { aiChatApi } from "../apis";
import { useEffect } from "preact/hooks";
export type ChatIA = ["user" | "assistant", string];

function generateId() {
    return Date.now().toString(32).slice(2);
}
const storageEmpresa = { slug: "" };
export function getId() {
    const key = `${storageEmpresa?.slug}:chatUserId`;
    if (!localStorage.getItem(key)) {
        localStorage.setItem(key, generateId());
    }

    return localStorage.getItem(key);
}

const isConnect = signal<boolean>(false);
const chats = signal<ChatIA[]>([]);

interface UseChatStoreProps {
    base_url: string;
}
function useChatStore({ base_url }: UseChatStoreProps) {
    const chatsMutation = aiChatApi({ base_url });
    useEffect(() => {
        chatsMutation.mutate(
            { token: getId() as string },
            {
                onSuccess(data) {
                    isConnect.value = true;
                    chats.value = data.chats;
                },
                onError(error) {
                    isConnect.value = false;
                    console.error(error.message);
                },
            }
        );
    }, []);
    function updateAssistantChat(newContent: string) {
        chats.value = chats.value.map((msg, idx) =>
            idx === chats.value.length - 1 && msg[0] === "assistant"
                ? (["assistant", newContent] as ChatIA)
                : msg
        );
    }
    function insertAssistantChat(chat: ChatIA) {
        chats.value = [...chats.value, chat];
    }

    return {
        isConnect: isConnect.value,
        chats,
        token: getId() as string,
        updateAssistantChat,
        insertAssistantChat,
    };
}
export default useChatStore;
