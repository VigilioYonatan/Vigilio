import { toSvg } from "jdenticon";
import type { Despatch } from "../../core/model/despatch/despatch";
import type { BaseSale } from "../../core/model/sale/base_sale";

export class QrRender {
	public getImage(sale: BaseSale): string {
		const client = sale.getClient();
		const params = [
			sale.getCompany()?.ruc,
			sale.getTipoDoc(),
			sale.getSerie(),
			sale.getCorrelativo(),
			sale.getMtoIGV()?.toFixed(2),
			sale.getMtoImpVenta()?.toFixed(2),
			sale.getFechaEmision()?.toISOString().split("T")[0],
			client?.getTipoDoc(),
			client?.getNumDoc(),
		];
		const content =
			params.filter((p) => p !== undefined && p !== null).join("|") + "|";

		return this.getQrImage(content);
	}

	public getImageDespatch(despatch: Despatch): string {
		const destinatario = despatch.getDestinatario();
		const params = [
			despatch.getCompany()?.ruc,
			despatch.getTipoDoc(),
			despatch.getSerie(),
			despatch.getCorrelativo(),
			despatch.getFechaEmision()?.toISOString().split("T")[0],
			destinatario?.getTipoDoc(),
			destinatario?.getNumDoc(),
		];
		const content =
			params.filter((p) => p !== undefined && p !== null).join("|") + "|";

		return this.getQrImage(content);
	}

	public getQrUrl(url: string): string {
		return this.getQrImage(url);
	}

	private getQrImage(content: string): string {
		// Usando jdenticon como alternativa simple para generar SVG
		// Para QR codes reales, usar una librería como qrcode
		return toSvg(content, 120);
	}
}
