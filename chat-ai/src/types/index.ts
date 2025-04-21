export interface Props {
    base_url: string;
    color?: string; // color primary
    height?: number; //  height del chat
    type_button?: "chat-gpt" | "bot" | "deepseek" | "logo"; // imagen del boton
    background_color?: string; // colorr fondo del chat
    mobile_mode: "normal" | "chat"; // mobile chat toda pantalla
    chat_width?: string;
    logo_ai_chat?: string; //logo "logo"

    //
    position?: ""; // agregar position start, bottom-left, top-right
    // agregar mas si tienes perzonalizacion si encuentras
}
