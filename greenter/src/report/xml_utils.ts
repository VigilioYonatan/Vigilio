import fs from "node:fs/promises";
import * as xpath from "xpath";

export class XmlUtils {
	private static readonly EXT_NAMESPACE =
		"urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2";
	private static readonly DS_NAMESPACE = "http://www.w3.org/2000/09/xmldsig#";
	private static readonly DIGEST_QUERY =
		"ext:ExtensionContent/ds:Signature/ds:SignedInfo/ds:Reference/ds:DigestValue";

	public getHashSign(xml: string): string | null {
		const parser = new DOMParser();
		const doc = parser.parseFromString(xml, "text/xml");

		return this.getHashSignFromDoc(doc);
	}

	public async getHashSignFromFile(filename: string): Promise<string | null> {
		// En el entorno del navegador, necesitarías usar FileReader o similar
		// Esta implementación asume un entorno Node.js
		const xml = await fs.readFile(filename, "utf8");
		return this.getHashSign(xml);
	}

	public getHashSignFromDoc(document: Document): string | null {
		const namespaces = {
			ext: XmlUtils.EXT_NAMESPACE,
			ds: XmlUtils.DS_NAMESPACE,
		};

		const select = xpath.useNamespaces(namespaces);
		const exts = select(
			"ext:UBLExtensions/ext:UBLExtension",
			document.documentElement,
		) as Node[];

		if (exts.length === 0) {
			return null;
		}

		return this.getHash(exts, select);
	}

	private getHash(exts: Node[], select: xpath.XPathSelect): string | null {
		for (let i = exts.length - 1; i >= 0; i--) {
			const nodeSign = exts[i];
			const hash = select(XmlUtils.DIGEST_QUERY, nodeSign!) as Node | null;

			if (!hash) {
				continue;
			}

			return hash.textContent || null;
		}

		return null;
	}
}
