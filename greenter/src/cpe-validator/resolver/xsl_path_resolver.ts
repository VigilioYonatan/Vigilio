import { DocumentType } from "../enum/document_type";
import type { RuleResolverInterface } from "../interfaces/rule_resolver_interface";

export class XslPathResolver implements RuleResolverInterface {
    private basePath: string;
    private pathMapping: { [key: string]: string } = {
        [DocumentType.FACTURA]: "2.X/ValidaExprRegFactura-2.0.1.xsl",
        [DocumentType.BOLETA]: "2.X/ValidaExprRegBoleta-2.0.1.xsl",
        [DocumentType.NOTA_CREDITO]: "2.X/ValidaExprRegNC-2.0.1.xsl",
        [DocumentType.NOTA_DEBITO]: "2.X/ValidaExprRegND-2.0.1.xsl",
        [DocumentType.RESUMEN_DIARIO]: "1.X/ValidaExprRegSummary-1.1.0.xsl",
        [DocumentType.COMUNICACION_BAJA]:
            "1.X/ValidaExprRegSummaryVoided-1.0.1.xsl",
        [DocumentType.GUIA_REMISION]: "2.X/ValidaExprRegGreRemitente-2.0.1.xsl",
        [DocumentType.RETENCION]: "1.X/ValidaExprRegRetencion-1.0.3.xsl",
        [DocumentType.PERCEPCION]: "1.X/ValidaExprRegPercepcion-1.0.1.xsl",
        [DocumentType.RESUMEN_REVERSION]:
            "1.X/ValidaExprRegOtrosVoided-1.0.1.xsl",
    };

    constructor(basePath: string) {
        this.basePath = basePath;
    }

    public getPath(typeDoc: string | null): string | null {
        if (!typeDoc || !this.pathMapping[typeDoc]) {
            return null;
        }

        return `${this.basePath}/${this.pathMapping[typeDoc]}`;
    }
}
