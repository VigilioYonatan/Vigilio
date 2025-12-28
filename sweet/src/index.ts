import sweetModal from "./sweet.js";
import sweetAlert from "./alert.js";
import { h as c } from "./helpers.js";
import { type Icon, type SwalProps, type SwalAlertProps } from "./types.js";
export { Icon, SwalProps, c, SwalAlertProps };
export { sweetModal, sweetAlert };
export let modalProps: SwalProps = {
    icon: "info",
    text: "¡No podrás revertir esto!",
    html: undefined,
    title: "¿Estas seguro?",
    showCancelButton: false,
    cancelButtonText: "Cancelar",
    showCloseButton: false,
    showConfirmButton: true,
    confirmButtonText: "OK!",
    cancelButtonAriaLabel: "cancel",
    confirmButtonAriaLabel: "ok",
    position: "center",
    customIcon: undefined,
    sweetWidth: "28rem",
    timer: undefined,
    hiddeBackground: false,
    isCloseInBackground: true,
    backgroundStyle: "background-color: #0006;",
};
function modalConfig(props: SwalProps) {
    if (typeof window !== "undefined") {
        modalProps = { ...modalProps, ...props };
    }
}
export let alertProps: SwalAlertProps = {
    icon: "info",
    html: undefined,
    text: "",
    title: "",
    showCloseButton: false,
    customIcon: undefined,
    timer: 3,
    height: 50,
    width: 350,
    position: undefined,
    hiddenBottomAnimation: false,
    colorAnimation: undefined,
};
function alertConfig(props: SwalAlertProps) {
    if (typeof window !== "undefined") {
        alertProps = { ...alertProps, ...props };
    }
}
const Sweet = {
    modalConfig,
    alertConfig,
};
if (typeof window !== "undefined") {
    (window as any).Sweet = { modalConfig, alertConfig };
}

export default Sweet;
