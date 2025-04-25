import { useSignal } from "@preact/signals";
import { useCallback, useEffect, useRef, useState } from "preact/hooks";
import { Fragment } from "preact/jsx-runtime";
import useCopyToClipboard from "../hooks/useCopyToClipboard";
import usePressTimeOut from "../hooks/usePressTimeOut";
import { generateSignature, removeTextHTML } from "../helpers";
import "../assets/assistant.css";
import "../assets/form.css";
import Watermark from "./WaterMark";
import { Props } from "../types";
import { FormEvent } from "preact/compat";
import VigilioLogo from "../assets/logo-white.webp";
import { useIsMobile } from "../hooks/useMobile";
import { createT } from "../helpers/i18n";
import { validateSchema } from "../helpers/validator";
import useChatStore from "../hooks/useChat";
import Loader from "../assets/Loader";
import configVigilio from "../config";

interface AssistantVirtualProps {
    onClose: () => void;
    isOpen: boolean;
    className?: string;
    props: Props;
}
export type ChatIA = [string, "user" | "assistant", string];

function AssistantVirtual2({
    onClose,
    isOpen,
    className,
    props,
}: AssistantVirtualProps) {
    const formState = useSignal({
        name: "",
        telephone: "",
        email: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({
        name: "",
        telephone: "",
        email: "",
    });

    const isMobile = useIsMobile({ breakpoint: 580 });

    const [isFormVisible, setIsFormVisible] = useState(true);

    const t = createT(props.lang === "en" ? "en" : "es");

    const schema = {
        name: {
            required: true,
            minLength: 3,
            message: t("errorName"),
        },
        telephone: {
            required: true,
            minLength: 9,
            maxLength: 9,
            message: t("errorTelephone"),
        },
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: t("errorEmail"),
        },
    };

    const onSubmit = useCallback((e: FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        formState.value = data as {
            name: string;
            telephone: string;
            email: string;
        };

        const { isValid, messages } = validateSchema(schema, formState.value);

        if (isValid) {
            console.log("form", formState.value);
            setIsFormVisible(false);
        } else {
            setErrors(messages);
        }
    }, []);

    const onChangeForm = (field: string, value: string) => {
        const { messages } = validateSchema(schema, {
            ...formState.value,
            [field]: value,
        });

        setErrors({
            ...errors,
            [field]: messages[field] || "",
        });
    };

    return (
        <>
            <div
                style={{
                    "--vigilio-height":
                        isMobile && props.mobile_mode === "chat"
                            ? "100vh"
                            : props.height,
                }}
                className={className}
            >
                {props.init_with_form ? (
                    <div
                        className={`vigilio-form-init-container ${
                            isFormVisible ? "" : "visible"
                        }`}
                    >
                        <div className="vigilio-form-top">
                            <p>{t("subtitle")}</p>
                        </div>
                        <form onSubmit={onSubmit} className="vigilio-form-init">
                            <input
                                type="text"
                                name="name"
                                required
                                className="vigilio-form-input"
                                onInput={(e) => {
                                    formState.value.name = (
                                        e.target as HTMLInputElement
                                    ).value;
                                    onChangeForm("name", formState.value.name);
                                }}
                                value={formState.value.name}
                                placeholder={t("name")}
                            />
                            {errors.name ? (
                                <span className="vigilio-form-error">
                                    {errors.name}
                                </span>
                            ) : null}
                            <input
                                type="number"
                                name="telephone"
                                className="vigilio-form-input"
                                required
                                onInput={(e) => {
                                    formState.value.telephone = (
                                        e.target as HTMLInputElement
                                    ).value;
                                    onChangeForm(
                                        "telephone",
                                        formState.value.telephone
                                    );
                                }}
                                value={formState.value.telephone}
                                placeholder={t("telephone")}
                            />
                            {errors.telephone ? (
                                <span className="vigilio-form-error">
                                    {errors.telephone}
                                </span>
                            ) : null}
                            <input
                                type="email"
                                name="email"
                                required
                                // pattern={"^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"}
                                className="vigilio-form-input"
                                onInput={(e) => {
                                    formState.value.email = (
                                        e.target as HTMLInputElement
                                    ).value;
                                    onChangeForm(
                                        "email",
                                        formState.value.email
                                    );
                                }}
                                value={formState.value.email}
                                placeholder={t("email")}
                            />
                            {errors.email ? (
                                <span className="vigilio-form-error">
                                    {errors.email}
                                </span>
                            ) : null}
                            <button
                                type="submit"
                                className="vigilio-form-button"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="256"
                                    height="256"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="#ffffff"
                                        d="M.292 1.665L24.002 12L.293 22.336L3.94 12zM5.708 13l-2 5.665L18.999 12L3.708 5.336l2 5.664H11v2z"
                                    />
                                </svg>
                                <span>{t("startChat")}</span>
                            </button>
                        </form>
                        <Watermark>
                            <img
                                src={VigilioLogo}
                                className="vigilio-logo-chatbot"
                                alt=""
                            />
                            <span>{t("addBot")}</span>
                        </Watermark>
                    </div>
                ) : null}
                {isOpen ? (
                    <>
                        {(() => {
                            // const chats = useSignal<ChatIA[]>([
                            //     [
                            //         "1",
                            //         "assistant",
                            //         "Hola, ¿en qué puedo ayudarte?",
                            //     ],
                            //     [
                            //         "2",
                            //         "user",
                            //         "Hola, necesito ayuda con mi pedido.",
                            //     ],
                            //     [
                            //         "3",
                            //         "assistant",
                            //         "Claro, ¿cuál es tu número de pedido?",
                            //     ],
                            //     ["4", "user", "Es el 123456789"],
                            //     [
                            //         "5",
                            //         "assistant",
                            //         "Gracias, estoy revisando tu pedido.",
                            //     ],
                            //     ["6", "user", "¿Cuándo llegará?"],
                            //     [
                            //         "7",
                            //         "assistant",
                            //         "Tu pedido llegará en 3 días.",
                            //     ],
                            //     ["8", "user", "Gracias por la información."],
                            //     [
                            //         "9",
                            //         "assistant",
                            //         "De nada, ¿hay algo más en lo que pueda ayudarte?",
                            //     ],
                            //     ["10", "user", "No, eso es todo por ahora."],
                            //     [
                            //         "11",
                            //         "assistant",
                            //         "Perfecto, que tengas un buen día.",
                            //     ],
                            //     ["12", "user", "Igualmente, gracias."],
                            //     ["13", "assistant", "Hasta luego."],
                            //     ["14", "user", "Adiós."],
                            //     ["15", "assistant", "Cuídate."],
                            //     ["16", "user", "Lo haré."],
                            //     ["17", "assistant", "Me alegra escuchar eso."],
                            //     ["18", "user", "Gracias por tu ayuda."],
                            //     [
                            //         "19",
                            //         "assistant",
                            //         "Siempre estoy aquí para ayudar.",
                            //     ],
                            //     ["20", "user", "Eso es genial."],
                            // ]);
                            const chatBox = useRef<HTMLDivElement | null>(null);
                            const eventSourceRef = useRef<EventSource | null>(
                                null
                            );
                            const {
                                isConnect,
                                chats,
                                token,
                                insertAssistantChat,
                                updateAssistantChat,
                            } = useChatStore({
                                base_url: props.base_url,
                            });

                            const message = useSignal("");
                            const errorMessage = useSignal<null | string>(null);
                            const isLoading = useSignal(false);
                            const [cp] = useCopyToClipboard();
                            const { handleTouchEnd, handleTouchStart } =
                                usePressTimeOut();

                            // Scroll to bottom when chats change
                            useEffect(() => {
                                const chatContainer = chatBox.current;
                                if (chatContainer) {
                                    chatContainer.scrollTop =
                                        chatContainer.scrollHeight;
                                }
                            }, [chats.value.length]);

                            async function onSendMessage(e: SubmitEvent) {
                                e.preventDefault();
                                errorMessage.value = null;
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
                                onScrolling();
                            }, []);

                            useEffect(() => {
                                onScrolling();
                            }, [message]);

                            return (
                                <>
                                    <div class="vigilio-chat-container">
                                        <div className="vigilio-chat-top">
                                            <div class="vigilio-chat-header">
                                                <div class="vigilio-chat-header-logo">
                                                    <img
                                                        src={props.logo_ai_chat}
                                                        alt="logo"
                                                        class="vigilio-chat-ai-logo"
                                                    />
                                                </div>

                                                <div>
                                                    <h3 class="vigilio-chat-title">
                                                        {t("title")}
                                                    </h3>
                                                    <div className="vigilio-ai-company-status">
                                                        <div
                                                            class={`vigilio-connection-indicator ${
                                                                isConnect
                                                                    ? "connected"
                                                                    : "disconnected"
                                                            }`}
                                                        />
                                                        <span className="vigilio-ai-company-name">
                                                            {props.name_ai}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                class="vigilio-close-button"
                                                type="button"
                                                onClick={onClose}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="m7 7l10 10M7 17L17 7"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="vigilio-divider" />

                                        {isConnect ? (
                                            <>
                                                <div
                                                    ref={chatBox}
                                                    class="vigilio-chat-box"
                                                >
                                                    {chats.value.map(
                                                        (
                                                            [role, message],
                                                            i
                                                        ) => (
                                                            <Fragment
                                                                key={`${message}${i}`}
                                                            >
                                                                {role ===
                                                                "assistant" ? (
                                                                    <div class="vigilio-message-container">
                                                                        {props.logo_ai_chat ===
                                                                        "logo" ? (
                                                                            <img
                                                                                src={
                                                                                    props.logo_ai_chat
                                                                                }
                                                                                alt="logo"
                                                                                class="vigilio-chat-ai-logo-assistant"
                                                                            />
                                                                        ) : (
                                                                            <img
                                                                                src={
                                                                                    props.logo_ai_chat
                                                                                }
                                                                                alt="logo"
                                                                                class="vigilio-chat-ai-logo-assistant"
                                                                            />
                                                                        )}
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
                                            </>
                                        ) : (
                                            <div class="vigilio-loading-screen">
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: "0.5rem",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    <Loader />
                                                    {t("loading")}
                                                    {!props.base_url ? (
                                                        <p
                                                            style={{
                                                                color: "red",
                                                                fontSize:
                                                                    "0.9rem",
                                                            }}
                                                        >
                                                            {t("baseurl")}
                                                        </p>
                                                    ) : null}
                                                    {!props.api_key ? (
                                                        <p
                                                            style={{
                                                                color: "red",
                                                                fontSize:
                                                                    "0.9rem",
                                                            }}
                                                        >
                                                            {t("apikey")}
                                                        </p>
                                                    ) : null}
                                                    {!props.api_key ||
                                                    !props.base_url ? (
                                                        <a
                                                            href=""
                                                            style={{
                                                                fontWeight:
                                                                    "bold",
                                                                textDecoration:
                                                                    "underline",
                                                                fontSize:
                                                                    "0.9rem",
                                                            }}
                                                        >
                                                            {t("more")}
                                                        </a>
                                                    ) : null}
                                                </div>
                                            </div>
                                        )}
                                        <div class="vigilio-chat-bottom">
                                            <form
                                                onSubmit={onSendMessage}
                                                class="  "
                                            >
                                                <div className="vigilio-message-form-relative">
                                                    <input
                                                        onChange={(e) => {
                                                            message.value = (
                                                                e.target as HTMLInputElement
                                                            ).value;
                                                        }}
                                                        value={message}
                                                        placeholder={t(
                                                            "sendMessage"
                                                        )}
                                                        class="vigilio-message-input"
                                                    />
                                                    <button
                                                        type="submit"
                                                        aria-label="send message"
                                                        class="vigilio-send-button"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="1em"
                                                            height="1em"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="1.5"
                                                                d="m14 10l-3 3m9.288-9.969a.535.535 0 0 1 .68.681l-5.924 16.93a.535.535 0 0 1-.994.04l-3.219-7.242a.54.54 0 0 0-.271-.271l-7.242-3.22a.535.535 0 0 1 .04-.993z"
                                                            />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </form>
                                            <Watermark>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        gap: "0.2rem",
                                                        alignItems: "center",
                                                        justifyContent:
                                                            "center",
                                                    }}
                                                >
                                                    <img
                                                        src={VigilioLogo}
                                                        className="vigilio-logo-chatbot"
                                                        title="vigilio-services-chat"
                                                        loading="lazy"
                                                        alt="vigilio-services-chat"
                                                    />
                                                    <span
                                                        style={{
                                                            fontSize: "0.8rem",
                                                        }}
                                                    >
                                                        {t("addBot")}
                                                    </span>
                                                </div>
                                            </Watermark>
                                        </div>
                                    </div>
                                </>
                            );
                        })()}
                    </>
                ) : null}
            </div>
        </>
    );
}
export default AssistantVirtual2;
