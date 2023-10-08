import { h, icoDanger, icoInfo, icoSuccess, icoWarning } from "./helpers";
import { type Icon, type SwalProps } from "./types";
function vigilioSwal({
    icon = "info",
    text = "¡No podrás revertir esto!",
    html,
    title = "¿Estas seguro?",
    showCancelButton = false,
    cancelButtonText = "Cancelar",
    showCloseButton = false,
    showConfirmButton = true,
    confirmButtonText = "OK!",
    cancelButtonAriaLabel = "cancel",
    confirmButtonAriaLabel = "ok",
    position = "center",
    customIcon,
    timer,
}: SwalProps): Promise<{ isConfirmed: boolean }> {
    return new Promise((res) => {
        const htmlModal = h(
            "div",
            {
                className: "vigilio-modal",
                style: {
                    cssText: `align-items:${
                        position === "center"
                            ? "center"
                            : position === "start"
                            ? "baseline"
                            : position === "end"
                            ? "end"
                            : "center"
                    };`,
                } as CSSStyleDeclaration,
                onclick: onClose,
            },
            h(
                "div",
                {
                    className: "modal vigilio-modal-show",
                    onclick: (e) => {
                        e.stopPropagation();
                        res({ isConfirmed: false });
                    },
                },
                html
                    ? [
                          h("div", null, html),
                          h(
                              "button",
                              {
                                  className: "vigilio-close",
                                  style: {
                                      display: showCloseButton
                                          ? "block"
                                          : "none",
                                  } as CSSStyleDeclaration,
                                  onclick: onClose,
                              },
                              "x"
                          ),
                      ]
                    : [
                          h(
                              "button",
                              {
                                  className: "vigilio-close",
                                  style: {
                                      display: showCloseButton
                                          ? "block"
                                          : "none",
                                  } as CSSStyleDeclaration,
                                  onclick: onClose,
                              },
                              "x"
                          ),
                          customIcon ? h("div", null, customIcon) : isIco(icon),
                          h(
                              "span",
                              {
                                  className: "vigilio-title",
                              },
                              title
                          ),
                          h(
                              "div",
                              {
                                  className: "vigilio-html-container",
                              },
                              text
                          ),
                          h(
                              "div",
                              {
                                  style: {
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                  } as CSSStyleDeclaration,
                              },
                              [
                                  h<HTMLButtonElement>(
                                      "button",
                                      {
                                          className:
                                              "vigilio-confirm btn btn-success",
                                          ariaLabel: confirmButtonAriaLabel,
                                          type: "button",
                                          style: {
                                              display: showConfirmButton
                                                  ? "block"
                                                  : "none",
                                          } as CSSStyleDeclaration,
                                          onclick: () => {
                                              onClose();
                                              res({ isConfirmed: true });
                                          },
                                      },
                                      confirmButtonText
                                  ),
                                  h<HTMLButtonElement>(
                                      "button",
                                      {
                                          className:
                                              "vigilio-confirm btn btn-danger",
                                          ariaLabel: cancelButtonAriaLabel,
                                          style: {
                                              cssText: `display:${
                                                  showCancelButton
                                                      ? "block"
                                                      : "none"
                                              }`,
                                          } as CSSStyleDeclaration,
                                          type: "button",
                                          onclick: () => {
                                              onClose();
                                              res({ isConfirmed: false });
                                          },
                                      },
                                      cancelButtonText
                                  ),
                              ]
                          ),
                      ]
            )
        );
        const modal = htmlModal!.querySelector(".vigilio-modal .modal");

        function onClose() {
            modal!.classList.add("vigilio-modal-hidde");
            setTimeout(() => {
                modal?.classList.remove("vigilio-modal-hidde");
                document.body.removeChild(htmlModal);
            }, 100);
        }

        function isIco(key: Icon): HTMLElement {
            const icono: Record<Icon, HTMLElement> = {
                danger: icoDanger(),
                success: icoSuccess(),
                info: icoInfo(),
                warning: icoWarning(),
            };
            return icono[key] || icoInfo();
        }

        setTimeout(() => {
            document.body.appendChild(htmlModal);
        }, 100);
        if (timer) {
            setTimeout(() => {
                onClose();
            }, timer * 1000);
        }
    });
}

export default vigilioSwal;
