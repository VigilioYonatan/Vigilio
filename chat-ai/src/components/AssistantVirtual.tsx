import { useSignal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";
import { Fragment } from "preact/jsx-runtime";
import useCopyToClipboard from "../hooks/useCopyToClipboard";
import usePressTimeOut from "../hooks/usePressTimeOut";
import {
    generateSignature,
    removeTextHTML,
    sanitizeResponse,
} from "../helpers";
import "../assets/assistant.css";
import Watermark from "./WaterMark";
import { Props } from "../types";
import useChatStore from "../hooks/useChat";

interface AssistantVirtualProps {
    onClose: () => void;
    isOpen: boolean;
    props: Props;
}

function AssistantVirtual({ onClose, isOpen, props }: AssistantVirtualProps) {
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
                        const chatBox = useRef<HTMLDivElement | null>(null);
                        const {
                            isConnect,
                            chats,
                            token,
                            insertAssistantChat,
                            updateAssistantChat,
                        } = useChatStore({
                            base_url: props.base_url,
                        });

                        const eventSourceRef = useRef<EventSource | null>(null);
                        const message = useSignal("");
                        const errorMessage = useSignal<null | string>(null);
                        const isLoading = useSignal(false);
                        const [cp] = useCopyToClipboard();
                        const { handleTouchEnd, handleTouchStart } =
                            usePressTimeOut();
                        console.log(chats.value);

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
                            if (eventSourceRef.current) {
                                eventSourceRef.current.close();
                            }
                            const params = new URLSearchParams();
                            params.set("message", token);
                            params.set("token", token);
                            const url = `/api/ia/chat/message?${params}`;
                            const { signature, timestamp } =
                                await generateSignature(
                                    "GET",
                                    `${url}?${params}`
                                );
                            params.set("x-signature", signature);
                            params.set("x-timestamp", timestamp.toString());
                            const eventSource = new EventSource(
                                `${props.base_url}${url}?${params}`
                            );

                            eventSourceRef.current = eventSource;
                            let assistantContent = "";

                            eventSource.onmessage = (e) => {
                                if (e.data.trim() === ":keep-alive") return;
                                const data = JSON.parse(e.data);
                                assistantContent += data.content;
                                updateAssistantChat(assistantContent);
                                onScrolling();
                            };

                            eventSource.onerror = (e) => {
                                console.error("SSE Error:", e);
                                insertAssistantChat([
                                    "assistant",
                                    "Error de conexión",
                                ]);

                                eventSource.close();
                                isLoading.value = false;
                            };

                            eventSource.addEventListener("end", () => {
                                eventSource.close();
                                isLoading.value = false;
                            });
                            isLoading.value = true;
                            (e.target as HTMLFormElement).reset();
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
                            return () => {
                                if (eventSourceRef.current) {
                                    eventSourceRef.current.close();
                                }
                            };
                        }, []);
                        useEffect(() => {
                            onScrolling();
                        }, []);

                        useEffect(() => {
                            onScrolling();
                        }, [message]);

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
                                                    ([role, message], i) => (
                                                        <Fragment
                                                            key={`${message}${i}`}
                                                        >
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
                                                                                __html: sanitizeResponse(
                                                                                    message
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
