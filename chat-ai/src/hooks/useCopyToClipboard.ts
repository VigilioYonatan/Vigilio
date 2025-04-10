import { useCallback, useState } from "preact/hooks";
type CopiedValue = string | null;
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type CopyFn = (text: any) => Promise<boolean>;

// HOOK para copiar y pegar
function useCopyToClipboard(): [CopyFn, CopiedValue] {
    const [copiedText, setCopiedText] = useState<CopiedValue>(null);

    const copy: CopyFn = useCallback(async (text) => {
        if (!navigator?.clipboard) {
            console.warn("Clipboard not supported");
            return false;
        }

        // Try to save to clipboard then save it in the state if worked
        try {
            await navigator.clipboard.writeText(text);
            setCopiedText(text);
            return true;
        } catch (error) {
            console.warn("Copy failed", error);
            setCopiedText(null);
            return false;
        }
    }, []);

    return [copy, copiedText];
}
export default useCopyToClipboard;
