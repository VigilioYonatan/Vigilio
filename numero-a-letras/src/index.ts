function Unidades(num: number) {
    switch (num) {
        case 1:
            return "UN";
        case 2:
            return "DOS";
        case 3:
            return "TRES";
        case 4:
            return "CUATRO";
        case 5:
            return "CINCO";
        case 6:
            return "SEIS";
        case 7:
            return "SIETE";
        case 8:
            return "OCHO";
        case 9:
            return "NUEVE";
    }

    return "";
} //Unidades()

function Decenas(num: number) {
    const decena = Math.floor(num / 10);
    const unidad = num - decena * 10;

    switch (decena) {
        case 1:
            switch (unidad) {
                case 0:
                    return "DIEZ";
                case 1:
                    return "ONCE";
                case 2:
                    return "DOCE";
                case 3:
                    return "TRECE";
                case 4:
                    return "CATORCE";
                case 5:
                    return "QUINCE";
                default:
                    return "DIECI" + Unidades(unidad);
            }
        case 2:
            switch (unidad) {
                case 0:
                    return "VEINTE";
                default:
                    return "VEINTI" + Unidades(unidad);
            }
        case 3:
            return DecenasY("TREINTA", unidad);
        case 4:
            return DecenasY("CUARENTA", unidad);
        case 5:
            return DecenasY("CINCUENTA", unidad);
        case 6:
            return DecenasY("SESENTA", unidad);
        case 7:
            return DecenasY("SETENTA", unidad);
        case 8:
            return DecenasY("OCHENTA", unidad);
        case 9:
            return DecenasY("NOVENTA", unidad);
        case 0:
            return Unidades(unidad);
    }
} //Unidades()

function DecenasY(strSin: string, numUnidades: number) {
    if (numUnidades > 0) return strSin + " Y " + Unidades(numUnidades);

    return strSin;
} //DecenasY()

function Centenas(num: number) {
    const centenas = Math.floor(num / 100);
    const decenas = num - centenas * 100;

    switch (centenas) {
        case 1:
            if (decenas > 0) return "CIENTO " + Decenas(decenas);
            return "CIEN";
        case 2:
            return "DOSCIENTOS " + Decenas(decenas);
        case 3:
            return "TRESCIENTOS " + Decenas(decenas);
        case 4:
            return "CUATROCIENTOS " + Decenas(decenas);
        case 5:
            return "QUINIENTOS " + Decenas(decenas);
        case 6:
            return "SEISCIENTOS " + Decenas(decenas);
        case 7:
            return "SETECIENTOS " + Decenas(decenas);
        case 8:
            return "OCHOCIENTOS " + Decenas(decenas);
        case 9:
            return "NOVECIENTO " + Decenas(decenas);
    }

    return Decenas(decenas);
} //Centenas()

function Seccion(
    num: number,
    divisor: number,
    strSingular: string,
    strPlural: string
) {
    const cientos = Math.floor(num / divisor);
    const resto = num - cientos * divisor;

    let letras = "";

    if (cientos > 0)
        if (cientos > 1) letras = Centenas(cientos) + " " + strPlural;
        else letras = strSingular;

    if (resto > 0) letras += "";

    return letras;
} //Seccion()

function Miles(num: number) {
    const divisor = 1000;
    const cientos = Math.floor(num / divisor);
    const resto = num - cientos * divisor;

    const strMiles = Seccion(num, divisor, "UN MIL", "MIL");
    const strCentenas = Centenas(resto);

    if (strMiles == "") return strCentenas;

    return strMiles + " " + strCentenas;
} //Miles()

function Millones(num: number) {
    const divisor = 1000000;
    const cientos = Math.floor(num / divisor);
    const resto = num - cientos * divisor;

    const strMillones = Seccion(num, divisor, "UN MILLON DE", "MILLONES DE");
    const strMiles = Miles(resto);

    if (strMillones == "") return strMiles;

    return strMillones + " " + strMiles;
} //Millones()

/**
 *
 * @param num
 * @param moneda - {singural: sol, plural: soles,centSingular:CENTIMOS,centPlural:CENTIMO}
 * @param isFactura -boolean true: 20/100
 * @returns
 */
function numeroALetras(
    num: number,
    isMoney: boolean = false,
    moneda?: {
        Monedasingular?: string;
        Monedaplural?: string;
        centSingular?: string;
        centPlural?: string;
        isInvoice?: boolean;
    }
) {
    const {
        Monedaplural = "SOLES",
        Monedasingular = "SOL",
        centPlural = "CENTIMOS",
        centSingular = "CENTIMO",
        isInvoice = false,
    } = moneda || {
        Monedasingular: "SOLES",
        Monedaplural: "SOL",
        centSingular: "CENTIMO",
        centPlural: "CENTIMOS",
        isInvoice: false,
    };
    const data = {
        numero: num,
        enteros: Math.floor(num),
        centavos: Math.round(num * 100) - Math.floor(num) * 100,
        letrasCentavos: "",
        letrasMonedaPlural: isMoney ? Monedaplural : "", //"PESOS", 'Dólares', 'Bolívares', 'etcs'
        letrasMonedaSingular: isMoney ? Monedasingular : "", //"PESO", 'Dólar', 'Bolivar', 'etc'

        letrasMonedaCentavoPlural: isMoney ? centPlural : "",
        letrasMonedaCentavoSingular: isMoney ? centSingular : "",
    };

    if (data.centavos > 0)
        data.letrasCentavos = `${isInvoice ? "" : "CON "}${(function () {
            if (data.centavos > 9)
                return isInvoice
                    ? data.centavos + "/100 " + data.letrasMonedaPlural
                    : Millones(data.centavos) +
                          " " +
                          data.letrasMonedaCentavoSingular;
            else
                return isInvoice
                    ? "0" + data.centavos + "/100 " + data.letrasMonedaPlural
                    : Millones(data.centavos) +
                          " " +
                          data.letrasMonedaCentavoPlural;
        })()}`;

    let resultado: string;
    if (data.enteros == 0)
        resultado =
            "CERO " + data.letrasMonedaPlural + " " + data.letrasCentavos;
    if (data.enteros == 1)
        resultado =
            Millones(data.enteros) +
            " " +
            data.letrasMonedaSingular +
            " " +
            data.letrasCentavos;
    else
        resultado =
            Millones(data.enteros) +
            " " +
            data.letrasMonedaPlural +
            " " +
            data.letrasCentavos;
    return resultado.replaceAll("  ", " ");
}
export default numeroALetras;
