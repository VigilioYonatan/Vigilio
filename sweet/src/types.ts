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
}
