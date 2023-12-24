/*
Configuración: No tocar. si tienes problema comunicarte en esta parte con vigilio
*/
import { FunctionComponent, JSX, render as renderPreact } from "preact";
import { Suspense } from "preact/compat";
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function render(element: string, Component: FunctionComponent<any>) {
    const elements = document.querySelectorAll(nameTemplate(element));
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    let props: any = {};
    // biome-ignore lint/complexity/noForEach: <explanation>
    elements.forEach((el) => {
        if (el) {
            for (const [_key, value] of Object.entries(el?.attributes)) {
                const printValue: string = value.name.startsWith(":")
                    ? JSON.parse(value.value)
                    : value.value;
                const printName: string = value.name.startsWith(":")
                    ? value.name.slice(1)
                    : value.name;
                props = { ...props, [printName]: printValue };
            }
            return renderPreact(
                <Suspense fallback={null}>
                    <Component {...props} />
                </Suspense>,
                el
            );
        }
    });
}
function nameTemplate(text: string) {
    return text.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

export function component(children: JSX.Element | JSX.Element[]) {
    const div = document.createElement("div");
    div.style.width = "100%";

    renderPreact(<Suspense fallback={null}>{children}</Suspense>, div);
    return div;
}

export default render;
