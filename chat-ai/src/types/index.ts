export interface Props {
    color?: string; // color primary
    height?: number; //  height del chat
    type_button?: "chat-gpt" | "bot" | "deepseek" | "logo"; // imagen del boton
    background_color?: string; // colorr fondo del chat
    mobile_mode: "normal" | "chat"; // mobile chat toda pantalla
    chat_width?: string;
    position?: ""; // agregar position start, bottom-left, top-right
}
