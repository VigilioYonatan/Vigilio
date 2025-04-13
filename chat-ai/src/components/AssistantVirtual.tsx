import { useSignal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";
import { Fragment } from "preact/jsx-runtime";
import useSocketStore from "../hooks/useSocket";
import useCopyToClipboard from "../hooks/useCopyToClipboard";
import usePressTimeOut from "../hooks/usePressTimeOut";
import { removeTextHTML } from "../helpers";
import "../assets/assistant.css";
import Watermark from "./WaterMark";
import { Props } from "../types";

interface AssistantVirtualProps {
    onClose: () => void;
    isOpen: boolean;
    props: Props;
}
export type ChatIA = [string, "user" | "assistant", string];

function AssistantVirtual({ onClose, isOpen, props }: AssistantVirtualProps) {
    console.log(props.mobile_mode);

    return (
        <div
            class={`${
                props.mobile_mode === "chat"
                    ? "vigilio-button-container-ai-chat"
                    : "vigilio-button-container-ai"
            } ${isOpen ? "visible" : "invisible"}`}
        >
            {isOpen ? (
                <>
                    {(() => {
                        const chats = useSignal<ChatIA[]>([]);
                        const chatBox = useRef<HTMLDivElement | null>(null);
                        const { io, connectSocket, isConnect } =
                            useSocketStore();
                        const message = useSignal("");
                        const errorMessage = useSignal<null | string>(null);
                        const isLoading = useSignal(false);
                        const [cp] = useCopyToClipboard();
                        const { handleTouchEnd, handleTouchStart } =
                            usePressTimeOut();

                        async function onSendMessage(e: SubmitEvent) {
                            e.preventDefault();
                            errorMessage.value = null;
                            if (message.value.length) {
                                errorMessage.value =
                                    "Este campo es obligatorio";
                            }
                            if (message.value.length > 300) {
                                errorMessage.value = "Máximo 300 carácteres";
                            }
                            if (isLoading.value) return;
                            isLoading.value = true;
                            (e.target as HTMLFormElement).reset();
                            const id = Date.now().toString(32).slice(4);
                            chats.value = [
                                ...chats.value,
                                [id, "user", message.value],
                            ];
                            io?.emit("chat:send-message", {
                                message: message.value,
                                id,
                            });
                        }
                        function onScrolling() {
                            const chatContainer = chatBox.current;
                            if (chatContainer) {
                                setTimeout(() => {
                                    chatContainer.scrollTop =
                                        chatContainer.scrollHeight;
                                }, 100);
                            }
                        }
                        useEffect(() => {
                            onScrolling();
                            connectSocket();
                        }, []);

                        useEffect(() => {
                            onScrolling();
                        }, [message]);

                        useEffect(() => {
                            io?.on(
                                "chat:ai",
                                (
                                    data: [
                                        string,
                                        "user" | "assistant",
                                        string
                                    ][]
                                ) => {
                                    chats.value = data ?? [];
                                    onScrolling();
                                }
                            );
                            return () => {
                                io?.off("chat:ai");
                            };
                        }, [io]);
                        useEffect(() => {
                            io?.on("chat:send-message", (chat: ChatIA) => {
                                onScrolling();
                                isLoading.value = false;
                                chats.value = chats.value.some(
                                    (ch) => ch[0] === chat[0]
                                )
                                    ? chats.value.map((ch) =>
                                          ch[0] === chat[0]
                                              ? [ch[0], chat[1], chat[2]]
                                              : ch
                                      )
                                    : [...chats.value, chat];
                            });
                            return () => {
                                io?.off("chat:send-message");
                            };
                        }, [io]);
                        return (
                            <>
                                <div class="vigilio-chat-container">
                                    <div class="vigilio-chat-header">
                                        <div
                                            class={`vigilio-connection-indicator ${
                                                isConnect
                                                    ? "connected"
                                                    : "disconnected"
                                            }`}
                                        />
                                        <h3 class="vigilio-chat-title">
                                            <i class="fas fa-user-robot vigilio-icon" />{" "}
                                            Asistente Virtual
                                        </h3>
                                        <Watermark />
                                    </div>
                                    <button
                                        class="vigilio-close-button"
                                        type="button"
                                        onClick={onClose}
                                    >
                                        X
                                    </button>
                                    <div class="vigilio-divider" />

                                    {isConnect ? (
                                        <>
                                            <div
                                                ref={chatBox}
                                                class="vigilio-chat-box"
                                            >
                                                {chats.value.map(
                                                    ([key, role, message]) => (
                                                        <Fragment key={key}>
                                                            {role ===
                                                            "assistant" ? (
                                                                <div class="vigilio-message-container">
                                                                    <div
                                                                        class="vigilio-assistant-message"
                                                                        onTouchStart={() =>
                                                                            handleTouchStart(
                                                                                () => {
                                                                                    cp(
                                                                                        removeTextHTML(
                                                                                            message
                                                                                        )
                                                                                    ).then(
                                                                                        () => {
                                                                                            // alert()
                                                                                            // sweetAlert(
                                                                                            //     {
                                                                                            //         icon: "success",
                                                                                            //         title: "Copiado correctamente",
                                                                                            //     }
                                                                                            // );
                                                                                        }
                                                                                    );
                                                                                }
                                                                            )
                                                                        }
                                                                        onTouchEnd={
                                                                            handleTouchEnd
                                                                        }
                                                                    >
                                                                        <div
                                                                            class="vigilio-message-content"
                                                                            dangerouslySetInnerHTML={{
                                                                                __html: message.replace(
                                                                                    /(^|\s)(https?:\/\/[^\s<]+)/g,
                                                                                    (
                                                                                        _,
                                                                                        space,
                                                                                        url
                                                                                    ) =>
                                                                                        `${space}<a href="${url}" class="vigilio-message-link">Click aquí</a>`
                                                                                ),
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <div class="vigilio-user-message">
                                                                    <p>
                                                                        {
                                                                            message
                                                                        }
                                                                    </p>
                                                                </div>
                                                            )}
                                                        </Fragment>
                                                    )
                                                )}
                                                {isLoading.value ? (
                                                    <div class="vigilio-loading-message">
                                                        <div class="vigilio-mensaje-tipeando">
                                                            <span class="vigilio-punto">
                                                                .
                                                            </span>
                                                            <span class="vigilio-punto">
                                                                .
                                                            </span>
                                                            <span class="vigilio-punto">
                                                                .
                                                            </span>
                                                        </div>
                                                    </div>
                                                ) : null}
                                            </div>

                                            <form
                                                onSubmit={onSendMessage}
                                                class="vigilio-message-form"
                                            >
                                                <input
                                                    onChange={(e) => {
                                                        message.value = (
                                                            e.target as HTMLInputElement
                                                        ).value;
                                                    }}
                                                    type="text"
                                                    value={message}
                                                    placeholder="Enviar mensaje"
                                                    class="vigilio-message-input"
                                                />
                                                <button
                                                    type="submit"
                                                    aria-label="send message"
                                                    class="vigilio-send-button"
                                                >
                                                    <i class="fa-solid fa-paper-plane-top" />
                                                </button>
                                            </form>
                                        </>
                                    ) : (
                                        <div class="vigilio-loading-screen">
                                            Cargando..
                                        </div>
                                    )}
                                </div>
                            </>
                        );
                    })()}
                </>
            ) : null}
        </div>
    );
}
export default AssistantVirtual;
