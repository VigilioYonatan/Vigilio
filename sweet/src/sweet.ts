import {
    bottomBackground,
    colorIcon,
    h,
    icoDanger,
    icoInfo,
    icoSuccess,
    icoWarning,
} from "./helpers";
import { type Icon, type SwalProps } from "./types";

function sweetModal(
    props: SwalProps | ((onClose: () => void) => SwalProps)
): Promise<{ isConfirmed: boolean }> {
    return new Promise((res) => {
        let properties = props;
        if (props instanceof Function) {
            properties = props(onClose);
        } else {
            properties = props;
        }
        const {
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
            sweetWidth = "28rem",
            timer,
            hiddeBackground = false,
            isCloseInBackground = true,
            backgroundStyle = "background-color: #0006;",
        } = properties;
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
                    };--sweet-width:${sweetWidth}; ${
                        hiddeBackground ? "" : backgroundStyle
                    }`,
                } as CSSStyleDeclaration,
                onclick: (e) => {
                    if (e.target === e.currentTarget && isCloseInBackground) {
                        onClose();
                        res({ isConfirmed: false });
                    }
                },
            },
            h(
                "div",
                {
                    className: "modal vigilio-modal-show",
                },
                html
                    ? [
                          h("div", null, html).firstElementChild as HTMLElement,
                          h(
                              "button",
                              {
                                  className: "vigilio-close",
                                  style: {
                                      display: showCloseButton
                                          ? "block"
                                          : "none",
                                  } as CSSStyleDeclaration,
                                  onclick: () => {
                                      onClose();
                                      res({ isConfirmed: false });
                                  },
                                  ariaLabel: "button to close modal",
                              },
                              "x"
                          ),
                          h("div", {
                              className: "vigilio-loader",
                              style: {
                                  cssText: `--bg-loader:${colorIcon(
                                      icon
                                  )}; display:${timer ? "block" : "none"};`,
                              } as CSSStyleDeclaration,
                          }),
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
                                  onclick: () => {
                                      onClose();
                                      res({ isConfirmed: false });
                                  },
                                  ariaLabel: "button to close modal",
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
                                  h("div", {
                                      className: "vigilio-loader",
                                      style: {
                                          cssText: `--bg-loader:${colorIcon(
                                              icon
                                          )}; display:${
                                              timer ? "block" : "none"
                                          };`,
                                      } as CSSStyleDeclaration,
                                  }),
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
                document.body.classList.remove("overflow-hidden");
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
            document.body.classList.add("overflow-hidden");
            document.body.appendChild(htmlModal);
        }, 100);

        window.addEventListener("popstate", () => {
            onClose();
        });

        if (timer) {
            const loader = htmlModal.querySelector(
                ".vigilio-loader"
            ) as HTMLDivElement;
            const timeTotal = timer * 1000;
            bottomBackground(timeTotal, loader);
            setTimeout(() => {
                onClose();
            }, timeTotal + 150);
        }
    });
}

export default sweetModal;
