import { bottomBackground, colorIcon, h } from "./helpers";
import { type Icon, type SwalAlertProps } from "./types";

function sweetAlert({
    icon = "info",
    html,
    title = "",
    showCloseButton = false,
    customIcon,
    timer = 3,
    height = 50,
    width = 350,
    position,
    hiddenBottomAnimation = false,
    colorAnimation,
}: SwalAlertProps): Promise<{ isConfirmed: boolean }> {
    return new Promise((res) => {
        const htmlModal = h(
            "div",
            {
                className: "vigilio-alert-container",
                style: {
                    cssText: `width:${width}px;height:${height}px; `,
                } as CSSStyleDeclaration,
                onclick: (e) => {
                    e.stopPropagation();
                    res({ isConfirmed: true });
                },
            },
            html
                ? [
                      h("div", null, html).firstElementChild as HTMLElement,
                      h(
                          "button",
                          {
                              className: "vigilio-close",
                              style: {
                                  display: showCloseButton ? "block" : "none",
                              } as CSSStyleDeclaration,
                              ariaLabel: "button to close alert",
                              onclick: () => {
                                  onClose();
                                  res({ isConfirmed: true });
                              },
                          },
                          "x"
                      ),
                      h("div", {
                          className: "vigilio-loader",
                          style: {
                              cssText: `--bg-loader:${
                                  colorAnimation
                                      ? colorAnimation
                                      : colorIcon(icon)
                              }`,
                              display: `${hiddenBottomAnimation ? "none" : ""}`,
                          } as CSSStyleDeclaration,
                      }),
                  ]
                : [
                      h(
                          "button",
                          {
                              className: "vigilio-close",
                              style: {
                                  display: showCloseButton ? "block" : "none",
                              } as CSSStyleDeclaration,
                              ariaLabel: "button to close alert",
                              onclick: onClose,
                          },
                          "x"
                      ),
                      customIcon
                          ? (h("div", null, customIcon)
                                .firstElementChild as HTMLElement)
                          : isIco(icon),
                      h(
                          "span",
                          {
                              className: "vigilio-title",
                          },
                          title
                      ),
                      h("div", {
                          className: "vigilio-loader",
                          style: {
                              cssText: `--bg-loader:${
                                  colorAnimation
                                      ? colorAnimation
                                      : colorIcon(icon)
                              }`,
                              display: `${hiddenBottomAnimation ? "none" : ""}`,
                          } as CSSStyleDeclaration,
                      }),
                  ]
        );

        function onClose() {
            res({ isConfirmed: false });
            htmlModal.classList.add("vigilio-alert-hidde");
            setTimeout(() => {
                htmlModal.remove();
            }, 300);
        }
        window.addEventListener("popstate", () => {
            onClose();
        });
        function isIco(key: Icon): HTMLElement {
            const icono: Record<Icon, HTMLElement> = {
                danger: h(
                    "div",
                    null,
                    "<svg xmlns='http://www.w3.org/2000/svg' fill='#dc2626' height='1em' viewBox='0 0 512 512'><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z'/></svg>"
                ).firstElementChild as HTMLElement,
                success: h(
                    "div",
                    null,
                    "<svg xmlns='http://www.w3.org/2000/svg' height='1em' fill='#16a34a' viewBox='0 0 512 512'><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z'/></svg>"
                ),
                info: h(
                    "div",
                    null,
                    "<svg xmlns='http://www.w3.org/2000/svg' height='1em' fill='#3fc3ee' viewBox='0 0 512 512'><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z'/></svg>"
                ),
                warning: h(
                    "div",
                    null,
                    "<svg xmlns='http://www.w3.org/2000/svg' height='1em' fill='#facc15' viewBox='0 0 512 512'><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z'/></svg>"
                ).firstElementChild as HTMLElement,
            };
            return icono[key];
        }

        if (document.body.querySelector(".vigilio-alert")) {
            document.body.querySelector(".vigilio-alert")?.prepend(htmlModal);
        } else {
            document.body.appendChild(
                h(
                    "div",
                    {
                        className: "vigilio-alert",
                        style: {
                            cssText: `${
                                position
                                    ? position
                                    : "bottom: 22px;right: 10px;"
                            }`,
                        } as CSSStyleDeclaration,
                    },
                    htmlModal
                )
            );
        }
        setTimeout(() => {
            htmlModal.classList.add("vigilio-alert-show");
        }, 1);
        const loader = htmlModal.querySelector(
            ".vigilio-loader"
        ) as HTMLDivElement;
        const timeTotal = timer * 1000;
        bottomBackground(timeTotal, loader);
        setTimeout(() => {
            onClose();
        }, timeTotal + 150);
    });
}
export default sweetAlert;
