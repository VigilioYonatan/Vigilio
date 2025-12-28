import Twig from "twig";
import { DOCUMENT_FILTER } from "../filter/document_filter";
import { ImageFilter } from "../filter/image_filter";

export class ReportTwigExtension {
    public register(): void {
        // Filters
        Twig.extendFilter("catalog", (value, params) => {
            // Implementar lógica de ImageFilter.toBase64
            return DOCUMENT_FILTER[params][value];
        });

        Twig.extendFilter("image_b64", ImageFilter.toBase64);

        Twig.extendFilter("n_format", (value, params) => {
            // Implementar lógica de FormatFilter.number
            return value;
        });

        // Functions
        Twig.extendFunction("legend", (value) => {
            // Implementar lógica de ResolveFilter.getValueLegend
            return value;
        });

        Twig.extendFunction("qrCode", (value) => {
            // Implementar lógica de QrRender.getImage
            return value;
        });

        Twig.extendFunction("qrCodeDespatch", (value) => {
            // Implementar lógica de QrRender.getImageDespatch
            return value;
        });

        Twig.extendFunction("qrUrl", (value) => {
            // Implementar lógica de QrRender.getQrUrl
            return value;
        });
    }
}
