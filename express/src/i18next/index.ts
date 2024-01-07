import { InterpolationMap, TOptionsBase } from "i18next";

export type Join<S1, S2> = S1 extends string
    ? S2 extends string
        ? `${S1}.${S2}`
        : never
    : never;

export type Paths<T> = {
    [K in keyof T]: T[K] extends Record<string, unknown>
        ? Join<K, Paths<T[K]>>
        : K;
}[keyof T];

export type I18nextFunction<T extends Record<string, unknown>> = (
    s:
        | {
              [K in keyof T]: `${K & string}:${T[K] & string}`;
          }[keyof T]
        | TemplateStringsArray
        | TemplateStringsArray[],
    options?: (TOptionsBase & InterpolationMap<string>) | undefined
) => string;
