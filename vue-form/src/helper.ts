interface OptionsFile {
    required?: boolean | { value: boolean; message?: string };
    maxFiles?: number | { value: number; message?: string };
    minFiles?: number | { value: number; message?: string };
    maxSize?: number | { value: number; message?: string };
    minSize?: number | { value: number; message?: string };
    type?:
        | string[]
        | { value: string[]; message?: string | ((file: any) => string) };
}
export function validateFile(files: FileList, options?: OptionsFile): true {
    if (
        options &&
        typeof options.required === "boolean" &&
        options.required &&
        !files.length
    ) {
        throw "Este campo es obligatorio";
    }
    if (
        options &&
        options.required instanceof Object &&
        options.required.value &&
        !files.length
    ) {
        throw options.required.message || "Este campo es obligatorio";
    }

    for (const file of files) {
        if (
            options &&
            typeof options.maxSize === "number" &&
            file.size > options.maxSize
        ) {
            throw `Archivo muy pesado, máximo ${options.maxSize}`;
        }
        if (
            options &&
            options.maxSize instanceof Object &&
            file.size > options.maxSize.value
        ) {
            throw `Archivo muy pesado, máximo ${options.maxSize.value}`;
        }
        if (
            options &&
            typeof options.minSize === "number" &&
            file.size < options.minSize
        ) {
            throw `Archivo muy ligero, mínimo ${options.minSize}`;
        }
        if (
            options &&
            options.minSize instanceof Object &&
            file.size < options.minSize.value
        ) {
            throw `Archivo muy ligero, mínimo ${options.minSize.value}`;
        }
        const nombreFile =
            file.name.length > 15
                ? file.name.substring(0, 12) + "." + file.name.slice(-4)
                : file.name;

        if (
            options &&
            !(options.type instanceof Array) &&
            options.type &&
            !options.type?.value.includes(file.type)
        ) {
            throw options.type.message instanceof Function
                ? options.type.message(file)
                : options?.type.message ||
                      `Tip de archivo no válido: ${nombreFile} `;
        }
        if (
            options &&
            options.type instanceof Array &&
            !options.type.includes(file.type)
        ) {
            throw `Tip de archivo no válido: ${nombreFile}`;
        }
    }
    if (
        options &&
        typeof options.maxFiles === "number" &&
        options.maxFiles < files.length
    ) {
        throw `Solo estan permitidos  máximo ${options.maxFiles} archivos`;
    }
    if (
        options &&
        options.maxFiles instanceof Object &&
        options.maxFiles.value < files.length
    ) {
        throw (
            options.maxFiles.message ||
            `Solo estan permitidos máximo ${options.maxFiles} archivos`
        );
    }
    if (
        options &&
        typeof options.minFiles === "number" &&
        options.minFiles > files.length
    ) {
        throw `Se requiren mínimo ${options.minFiles} archivos`;
    }
    if (
        options &&
        options.minFiles instanceof Object &&
        options.minFiles.value > files.length
    ) {
        throw (
            options.minFiles.message ||
            `Se requiren mínimo ${options.minFiles} archivos`
        );
    }
    return true;
}
