import { useSignal } from "@preact/signals";
import {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "preact/hooks";
import { Fragment } from "preact/jsx-runtime";
import useCopyToClipboard from "../hooks/useCopyToClipboard";
import usePressTimeOut from "../hooks/usePressTimeOut";
import { generateSignature, removeTextHTML } from "../helpers";
import Watermark from "./WaterMark";
import type { Props } from "../types";
import { lazy, Suspense, type FormEvent } from "preact/compat";
import { useIsMobile } from "../hooks/useMobile";
import { createT } from "../helpers/i18n";
import { validateSchema } from "../helpers/validator";
import useChatStore from "../hooks/useChat";
import Loader from "../assets/Loader";
import "../assets/assistant.css";
import "../assets/form.css";
import configVigilio from "../config";
import { SendIcon } from "../helpers/icon";
import { logoWhite } from "../assets/logo-white";

const VigilioLogo = lazy(
    () => import(/* webpackChunkName: "BOTLogo" */ "../assets/VigilioLogo")
);
const VigilioLogo2 = lazy(
    () => import(/* webpackChunkName: "BOTLogo" */ "../assets/VigilioLogo2")
);

interface AssistantVirtualProps {
    onClose: () => void;
    isOpen: boolean;
    props: Props;
}
export type ChatIA = [string, "user" | "assistant", string];

function AssistantVirtual({ onClose, isOpen, props }: AssistantVirtualProps) {
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
            minLength: 6,
            maxLength: 20,
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

    useEffect(() => {
        document.body.classList.toggle(
            "vigilio-overflow-hidden",
            isMobile && isOpen
        );
    }, [isMobile, isOpen]);
    console.log({
        isMobile,
        isChat: props.mobile_mode === "chat",
        isFormVisible,
    });
    console.log({
        a: isMobile && props.mobile_mode === "chat" && !isFormVisible,
    });

    return (
        <>
            <div
                style={{
                    "--vigilio-height":
                        isMobile &&
                        props.mobile_mode === "chat" &&
                        !isFormVisible
                            ? "100dvh"
                            : `${props.height}px`,
                }}
                className={`vigilio-relative ${
                    isMobile && props.mobile_mode === "chat" && !isFormVisible
                        ? "vigilio-button-container-ai-chat"
                        : "vigilio-button-container-ai"
                } ${isOpen ? "visible" : "invisible"} `}
            >
                {props.init_with_form ? (
                    <div
                        className={`vigilio-form-init-container ${
                            isFormVisible ? "" : "visible"
                        }`}
                    >
                        <div
                            className="vigilio-form-top animation-brightness"
                            style={{
                                "--brightness-delay": "8s",
                            }}
                        >
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: `${
                                        props.form_title?.replaceAll(
                                            "{{name_ai}}",
                                            `<b style="font-weight:bolder">${props.name_ai}</b>`
                                        ) || t("subtitle")
                                    }`,
                                }}
                            />
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
                        <Watermark props={props}>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "0.2rem",
                                }}
                            >
                                <Suspense fallback={null}>
                                    <VigilioLogo isFilter />
                                </Suspense>
                                <span>
                                    Powered by{" "}
                                    <b style={{ fontWeight: "bolder" }}>
                                        Vigilio Services
                                    </b>
                                </span>
                            </div>
                        </Watermark>
                    </div>
                ) : null}
                {isOpen ? (
                    <>
                        {(() => {
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
                                errorMessageServer,
                                isPlus,
                            } = useChatStore({
                                props,
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
                                params.set("message", message.value);
                                params.set("token", token);

                                if (props.test_url) {
                                    params.set("test_url", props.test_url);
                                } else {
                                    params.set("api_key", props.api_key);
                                }
                                const url =
                                    props.test_url &&
                                    window.location.origin.includes(
                                        configVigilio.vigilio_services_url
                                    )
                                        ? "/api/chat-ai/message"
                                        : `${props.base_url}/api/ia/chat/message`;
                                const { signature, timestamp } =
                                    await generateSignature(
                                        "GET",
                                        `${url}?${params}`
                                    );
                                params.set("x-signature", signature);
                                params.set("x-timestamp", timestamp.toString());
                                const eventSource = new EventSource(
                                    `${url}?${params}`
                                );
                                eventSourceRef.current = eventSource;
                                let assistantContent = "";

                                eventSource.onmessage = (e) => {
                                    if (e.data.trim() === ":keep-alive") return;
                                    try {
                                        const data = JSON.parse(e.data);
                                        assistantContent += data.content;
                                        updateAssistantChat(assistantContent);
                                        onScrolling();
                                    } catch (error) {
                                        console.error(
                                            "Error parsing SSE data:",
                                            error
                                        );
                                        insertAssistantChat([
                                            "assistant",
                                            "Error processing response",
                                        ]);
                                    }
                                };

                                eventSource.onerror = (e) => {
                                    if (
                                        eventSource.readyState ===
                                        EventSource.CLOSED
                                    ) {
                                        console.log("SSE connection closed");
                                    } else {
                                        console.error("SSE Error:", e);
                                        insertAssistantChat([
                                            "assistant",
                                            "Connection error",
                                        ]);
                                    }
                                    cleanupSSE();
                                };

                                eventSource.addEventListener("end", () => {
                                    cleanupSSE();
                                });
                                message.value = "";
                                isLoading.value = false;
                                function cleanupSSE() {
                                    if (eventSourceRef.current) {
                                        eventSourceRef.current.close();
                                        eventSourceRef.current = null;
                                    }
                                    isLoading.value = false;
                                }
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
                            const logoElement = useMemo(
                                () => (
                                    <div
                                        style={{
                                            "--brightness-delay": "4s",
                                        }}
                                        className="vigilio-chat-header-logo animation-brightness"
                                    >
                                        {!props.logo_ai_chat ? (
                                            <Suspense fallback={null}>
                                                <VigilioLogo />
                                            </Suspense>
                                        ) : (
                                            <img
                                                src={props.logo_ai_chat}
                                                alt="logo"
                                                title="logo"
                                                width={60}
                                                height={60}
                                                className="vigilio-chat-ai-logo"
                                                loading="lazy"
                                            />
                                        )}
                                    </div>
                                ),
                                []
                            );

                            return (
                                <>
                                    <div class="vigilio-chat-container">
                                        <div className="vigilio-chat-top">
                                            <div class="vigilio-chat-header">
                                                {logoElement}
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
                                                style={{ color: "#fff" }}
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
                                                                    <div class="vigilio-message-container ">
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
                                                                            <Suspense
                                                                                fallback={
                                                                                    null
                                                                                }
                                                                            >
                                                                                <img
                                                                                    src={
                                                                                        logoWhite
                                                                                    }
                                                                                    alt="logo"
                                                                                    class="vigilio-chat-ai-logo-assistant"
                                                                                />
                                                                            </Suspense>
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
                                                            href={
                                                                configVigilio.vigilio_services_chat
                                                            }
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
                                                    ) : (
                                                        <>
                                                            {errorMessageServer ? (
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
                                                                    {
                                                                        errorMessageServer
                                                                    }
                                                                </a>
                                                            ) : null}
                                                        </>
                                                    )}
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
                                                        <SendIcon />
                                                    </button>
                                                </div>
                                            </form>
                                            {!isPlus ? (
                                                <Watermark props={props}>
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            gap: "0.2rem",
                                                            alignItems:
                                                                "center",
                                                            justifyContent:
                                                                "center",
                                                        }}
                                                    >
                                                        <Suspense
                                                            fallback={null}
                                                        >
                                                            <VigilioLogo2 />
                                                        </Suspense>
                                                        <span
                                                            class="vigilio-ai-company-name"
                                                            style={{
                                                                fontSize:
                                                                    "0.8rem",
                                                            }}
                                                        >
                                                            {t("addBot")}
                                                        </span>
                                                    </div>
                                                </Watermark>
                                            ) : null}
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
export default AssistantVirtual;
