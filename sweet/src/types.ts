export type Icon = "danger" | "success" | "warning" | "info";
export interface SwalProps {
    title?: string;
    text?: string;
    icon?: Icon;
    customIcon?: string | HTMLElement;
    html?: string | HTMLElement;
    showCloseButton?: boolean;
    showCancelButton?: boolean;
    confirmButtonText?: string;
    confirmButtonAriaLabel?: string;
    cancelButtonText?: string;
    cancelButtonAriaLabel?: string;
    showConfirmButton?: boolean;
    timer?: number;
    position?: "center" | "end" | "start";
    sweetWidth?: string;
    hiddeModal?: boolean;
}
export interface SwalAlertProps {
    title?: string;
    icon?: Icon;
    customIcon?: string | HTMLElement;
    html?: string | HTMLElement;
    showCloseButton?: boolean;
    timer?: number;
    position?: string;
    height?: number;
    width?: number;
    hiddenBottomAnimation?:boolean
}
