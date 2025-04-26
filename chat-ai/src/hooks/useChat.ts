import { signal, useSignal } from "@preact/signals";
import { aiChatApi, aiChatTestApi } from "../apis";
import { useEffect } from "preact/hooks";
import { Props } from "../types";
import configVigilio from "../config";
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
    props: Props;
}
function useChatStore({ props }: UseChatStoreProps) {
    const chatsMutation = aiChatApi({ base_url: props.base_url });
    const aiChatTestMutation = aiChatTestApi();
    const errorMessageServer = useSignal<string | null>(null);
    useEffect(() => {
        // if (props.mode_dev) {
        //     chats.value = [
        //         [
        //             "assistant",
        //             props.custom_greet_chat ||
        //                 `Hola, Soy ${props.name_ai} 😀. ¿En que le podriamos ayudar?`,
        //         ],
        //         ["user", "Hola, me gustaría tener mas información."],
        //         [
        //             "assistant",
        //             props.custom_greet_chat ||
        //                 `Excelente 😀. Tenemos los mejores Zapatos 👞 de diferentes modelos para tí. ¿Cual te gustaría tenerlo?`,
        //         ],
        //     ];
        //     return;
        // }
        if (!props.api_key || !props.base_url) {
            return;
        }
        if (
            props.test_url &&
            window.location.origin.includes(configVigilio.vigilio_services_url)
        ) {
            aiChatTestMutation.mutate(
                { test_url: props.test_url },
                {
                    onSuccess(data) {
                        isConnect.value = true;
                        chats.value = data.chats;
                        errorMessageServer.value = null;
                    },
                    onError(error) {
                        console.error(error.message);
                        isConnect.value = false;
                        errorMessageServer.value = error.message;
                    },
                }
            );
            return;
        }
        chatsMutation.mutate(
            { token: getId() as string },
            {
                onSuccess(data) {
                    isConnect.value = true;
                    chats.value = data.chats;
                    errorMessageServer.value = null;
                },
                onError(error) {
                    console.error(error.message);
                    isConnect.value = false;
                    errorMessageServer.value = error.message;
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
        errorMessageServer,
    };
}
export default useChatStore;
