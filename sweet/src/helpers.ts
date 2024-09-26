import { type Icon } from "./types";

export function icoInfo() {
    return h(
        "div",
        {
            className: "vigilio-icon vigilio-question vigilio-icon-show",
            style: { display: "flex" } as CSSStyleDeclaration,
        },
        h("div", { className: "vigilio-icon-content" }, "?")
    );
}
export function icoDanger() {
    return h(
        "div",
        {
            className: "vigilio-icon vigilio-error",
            style: { display: "flex" } as CSSStyleDeclaration,
        },
        h("span", { className: "vigilio-x-mark" }, [
            h("span", { className: "vigilio-x-mark-line-left" }),
            h("span", { className: "vigilio-x-mark-line-right" }),
        ])
    );
}
export function icoWarning() {
    return h(
        "div",
        {
            className: "vigilio-icon vigilio-info",
            style: { display: "flex" } as CSSStyleDeclaration,
        },
        h("div", { className: "vigilio-icon-content" }, "i")
    );
}
export function icoSuccess() {
    return h(
        "div",
        {
            className: "vigilio-icon vigilio-success vigilio-icon-show",
            style: { display: "flex" } as CSSStyleDeclaration,
        },
        `<div class="vigilio-success-circular-line-left"></div>
        <span class="vigilio-success-line-tip"></span>
        <span class="vigilio-success-line-long"></span>
        <div class="vigilio-success-ring"></div>
        <div class="vigilio-success-fix"></div>
        <div class="vigilio-success-circular-line-right"></div>`
    );
}
export function h<T extends HTMLElement>(
    component: keyof HTMLElementTagNameMap,
    props?: Partial<T> | null,
    children?: HTMLElement[] | string | null | HTMLElement
) {
    const element = document.createElement(component);
    if (props) {
        for (const [attr, value] of Object.entries(props)) {
            if (typeof value === "object") {
                for (const [key, val] of Object.entries(value)) {
                    (element as any)[attr][key] = val;
                }
            } else {
                (element as any)[attr] = value;
            }
        }
    }
    if (children) {
        if (children instanceof Array) {
            for (const el of children) {
                element.appendChild(el);
            }
        }
        if (children instanceof HTMLElement) {
            element.appendChild(children);
        }
        if (typeof children === "string") {
            element.innerHTML = children;
        }
    }

    return element;
}
export function bottomBackground(timeTotal: number, element: HTMLElement) {
    const intervalo = 10;
    const pasos = timeTotal / intervalo;
    const anchoPorPaso = 100 / pasos;

    let anchoActual = 0;
    let paso = 0;
    function animarAncho() {
        if (paso < pasos) {
            anchoActual += anchoPorPaso;
            element.style.width = anchoActual + "%";
            paso++;
            setTimeout(animarAncho, intervalo);
        }
    }
    setTimeout(animarAncho, intervalo);
}
export function colorIcon(key: Icon) {
    const icono: Record<Icon, string> = {
        danger: "#dc2626",
        success: "#16a34a",
        info: "#3fc3ee",
        warning: "#facc15",
    };
    return icono[key];
}
