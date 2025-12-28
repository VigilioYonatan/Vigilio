import { DOMParser } from "xmldom";
import { DocumentType } from "../enum/document_type";
import type { TypeResolverInterface } from "../interfaces/type_resolver_interface";

export class XmlTypeResolver implements TypeResolverInterface {
    public getType(doc: Document): string | null {
        const docName = doc.documentElement.localName;
        switch (docName) {
            case "Invoice":
                return this.fromInvoice(doc);
            case "CreditNote":
                return DocumentType.NOTA_CREDITO;
            case "DebitNote":
                return DocumentType.NOTA_DEBITO;
            case "SummaryDocuments":
                return DocumentType.RESUMEN_DIARIO;
            case "VoidedDocuments":
                return this.fromVoided(doc);
            case "DespatchAdvice":
                return DocumentType.GUIA_REMISION;
            case "Retention":
                return DocumentType.RETENCION;
            case "Perception":
                return DocumentType.PERCEPCION;
            default:
                return null;
        }
    }

    public getTypeFromXml(xml: string | null): string | null {
        if (!xml) return null;

        const parser = new DOMParser();
        const doc = parser.parseFromString(xml, "text/xml");

        return this.getType(doc);
    }

    private fromInvoice(doc: Document): string | null {
        const typeCode = this.getTextValue(doc, "cbc:InvoiceTypeCode");
        return typeCode === DocumentType.BOLETA
            ? DocumentType.BOLETA
            : DocumentType.FACTURA;
    }

    private fromVoided(doc: Document): string | null {
        const id = this.getTextValue(doc, "cbc:ID");
        const isReversion = id?.startsWith(DocumentType.RESUMEN_REVERSION);

        return isReversion
            ? DocumentType.RESUMEN_REVERSION
            : DocumentType.COMUNICACION_BAJA;
    }

    private getTextValue(doc: Document, query: string): string | null {
        const xpathResult = doc.evaluate(
            query,
            doc.documentElement,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        );

        const node = xpathResult.singleNodeValue;
        return node ? node.textContent : null;
    }
}
