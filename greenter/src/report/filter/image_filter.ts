export class ImageFilter {
    private static readonly PNG_HEAD = "\x89\x50\x4E\x47\x0D\x0A\x1A\x0A";
    private static readonly JPEG_HEAD = "\xFF\xD8\xFF";
    private static readonly GIF_HEAD = "GIF";

    static toBase64(image: string, mime: string = ""): string | null {
        if (!mime) {
            mime = this.getMimeType(image);
        }
        const content = Buffer.from(image).toString("base64");
        return `data:image/${mime};base64,${content}`;
    }

    public getMimeType(raw: string): string {
        const text = raw.substring(0, 8);
        if (text === ImageFilter.PNG_HEAD) {
            return "png";
        }

        const firstThree = text.substring(0, 3);
        if (firstThree === ImageFilter.GIF_HEAD) {
            return "gif";
        }

        return "jpeg";
    }
}
