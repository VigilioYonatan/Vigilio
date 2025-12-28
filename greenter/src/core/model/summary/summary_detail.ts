import type { SummaryPerception } from "./summary_perception";

export class SummaryDetail {
	private tipoDoc?: string;
	private serieNro?: string;
	private clienteTipo?: string;
	private clienteNro?: string;
	private docReferencia?: Document;
	private percepcion?: SummaryPerception;
	private estado?: string;
	private total?: number;
	private mtoOperGravadas?: number;
	private mtoOperInafectas?: number;
	private mtoOperExoneradas?: number;
	private mtoOperExportacion?: number;
	private mtoOperGratuitas?: number;
	private mtoOtrosCargos?: number;
	private mtoIGV?: number;
	private mtoIvap?: number;
	private mtoISC?: number;
	private mtoOtrosTributos?: number;
	private mtoIcbper?: number;

	public getTipoDoc(): string | undefined {
		return this.tipoDoc;
	}

	public setTipoDoc(tipoDoc: string | undefined): SummaryDetail {
		this.tipoDoc = tipoDoc;
		return this;
	}

	public getSerieNro(): string | undefined {
		return this.serieNro;
	}

	public setSerieNro(serieNro: string | undefined): SummaryDetail {
		this.serieNro = serieNro;
		return this;
	}

	public getClienteTipo(): string | undefined {
		return this.clienteTipo;
	}

	public setClienteTipo(clienteTipo: string | undefined): SummaryDetail {
		this.clienteTipo = clienteTipo;
		return this;
	}

	public getClienteNro(): string | undefined {
		return this.clienteNro;
	}

	public setClienteNro(clienteNro: string | undefined): SummaryDetail {
		this.clienteNro = clienteNro;
		return this;
	}

	public getDocReferencia(): Document | undefined {
		return this.docReferencia;
	}

	public setDocReferencia(docReferencia: Document | undefined): SummaryDetail {
		this.docReferencia = docReferencia;
		return this;
	}

	public getPercepcion(): SummaryPerception | undefined {
		return this.percepcion;
	}

	public setPercepcion(
		percepcion: SummaryPerception | undefined,
	): SummaryDetail {
		this.percepcion = percepcion;
		return this;
	}

	public getEstado(): string | undefined {
		return this.estado;
	}

	public setEstado(estado: string | undefined): SummaryDetail {
		this.estado = estado;
		return this;
	}

	public getTotal(): number | undefined {
		return this.total;
	}

	public setTotal(total: number | undefined): SummaryDetail {
		this.total = total;
		return this;
	}

	public getMtoOperGravadas(): number | undefined {
		return this.mtoOperGravadas;
	}

	public setMtoOperGravadas(
		mtoOperGravadas: number | undefined,
	): SummaryDetail {
		this.mtoOperGravadas = mtoOperGravadas;
		return this;
	}

	public getMtoOperInafectas(): number | undefined {
		return this.mtoOperInafectas;
	}

	public setMtoOperInafectas(
		mtoOperInafectas: number | undefined,
	): SummaryDetail {
		this.mtoOperInafectas = mtoOperInafectas;
		return this;
	}

	public getMtoOperExoneradas(): number | undefined {
		return this.mtoOperExoneradas;
	}

	public setMtoOperExoneradas(
		mtoOperExoneradas: number | undefined,
	): SummaryDetail {
		this.mtoOperExoneradas = mtoOperExoneradas;
		return this;
	}

	public getMtoOperExportacion(): number | undefined {
		return this.mtoOperExportacion;
	}

	public setMtoOperExportacion(
		mtoOperExportacion: number | undefined,
	): SummaryDetail {
		this.mtoOperExportacion = mtoOperExportacion;
		return this;
	}

	public getMtoOperGratuitas(): number | undefined {
		return this.mtoOperGratuitas;
	}

	public setMtoOperGratuitas(
		mtoOperGratuitas: number | undefined,
	): SummaryDetail {
		this.mtoOperGratuitas = mtoOperGratuitas;
		return this;
	}

	public getMtoOtrosCargos(): number | undefined {
		return this.mtoOtrosCargos;
	}

	public setMtoOtrosCargos(mtoOtrosCargos: number | undefined): SummaryDetail {
		this.mtoOtrosCargos = mtoOtrosCargos;
		return this;
	}

	public getMtoIGV(): number | undefined {
		return this.mtoIGV;
	}

	public setMtoIGV(mtoIGV: number | undefined): SummaryDetail {
		this.mtoIGV = mtoIGV;
		return this;
	}

	public getMtoIvap(): number | undefined {
		return this.mtoIvap;
	}

	public setMtoIvap(mtoIvap: number | undefined): SummaryDetail {
		this.mtoIvap = mtoIvap;
		return this;
	}

	public getMtoISC(): number | undefined {
		return this.mtoISC;
	}

	public setMtoISC(mtoISC: number | undefined): SummaryDetail {
		this.mtoISC = mtoISC;
		return this;
	}

	public getMtoOtrosTributos(): number | undefined {
		return this.mtoOtrosTributos;
	}

	public setMtoOtrosTributos(
		mtoOtrosTributos: number | undefined,
	): SummaryDetail {
		this.mtoOtrosTributos = mtoOtrosTributos;
		return this;
	}

	public getMtoIcbper(): number | undefined {
		return this.mtoIcbper;
	}

	public setMtoIcbper(mtoIcbper: number | undefined): SummaryDetail {
		this.mtoIcbper = mtoIcbper;
		return this;
	}
}
