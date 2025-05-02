export interface Props {
    base_url: string;
    api_key: string;
    name_ai?: string;
    color?: string; // color primary
    height?: number; //  height del chat
    type_button?: "chat-gpt" | "bot" | "deepseek" | "logo"; // imagen del boton
    rounded_button?: number;
    lang?: "es" | "en"; // idioma del chat
    mobile_mode?: "normal" | "chat"; // mobile chat toda pantalla
    chat_width?: number;
    logo_ai_chat?: "logo" | string; //logo "logo"
    init_with_form?: boolean; // iniciar con el formulario
    form_title?: string;
    custom_greet_cloud?: string;
    custom_greet_chat?: string;
    isShowCloud?: boolean;
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"; // agregar position start, bottom-left, top-right
    zIndex?: number;
    test_url?: string | null;
}
