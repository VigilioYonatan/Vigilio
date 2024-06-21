export interface NiubizOrderCreditCard {
    channel: string;
    captureType: string;
    countable: boolean;
    order: {
        purchaseNumber: string;
        amount: number;
        currency: string;
        externalTransactionId?: string;
        tokenId?: string;
        installment?: number;
    };
    card: {
        cardNumber: string;
        expirationMonth: number;
        expirationYear: number;
        cvv2: string;
        tokenId?: string;
    };
    cardHolder?: {
        firstName: string;
        lastName: string;
        email: string;
    };
    athentication?: {
        eci: string;
        xid: string;
        cavv: string;
    };
    currencyConversion?: {
        accepted: boolean;
        eligibilityCode: string;
        currencyCode: string;
        currencyCodeAlpha: string;
        amount: number;
        exponent: number;
        exchangeRate: number;
        wholeSaleRate: number;
        markup: number;
        rateSource: string;
        rateDate: string;
        rateTime: string;
        status: string;
        signature: string;
    };
    sponsored?: {
        merchantId: string;
        name: string;
        address: string;
        phoneNumber: string;
        mcci: string;
    };
}
// yape
export interface NiubizYape {
    phoneNumber: string;
    otp: string;
}
export interface NiubizOrderYape {
    channel: string;
    captureType: string;
    countable: boolean;
    order: {
        purchaseNumber: string;
        amount: number;
        currency: string;
    };
    yape: {
        phoneNumber: string;
        otp: string;
    };
    sponsorder?: {
        ruc: string;
        merchantId: string;
        name: string;
        address: string;
        phoneNumber: string;
        mcci: string;
    };
}
export interface NiubizAntifraude {
    channel: string;
    clientIp?: string;
    deviceFingerprintId?: string;
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    merchantDefineData: Record<string, any>;
    billingAddress?: {
        street1: string;
        street2?: string;
        postalCode: number;
        city: string;
        state: string;
        country: string;
    };
    shippingAddress?: {
        street1: string;
        street2?: string;
        postalCode: number;
        city: string;
        state: string;
        country: string;
    };
    order: {
        purchaseNumber: string;
        amount: number;
        currency: string;
    };
    card: {
        cardNumber: string;
        expirationMonth: number;
        expirationYear: number;
        cvv2?: string;
    };
    cardHolder: {
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber?: string;
    };
    currencyConversion?: {
        accepted: true;
        eligibilityCode: string;
        currencyCode: string;
        currencyCodeAlpha: string;
        amount: number;
        exponent: number;
        exchangeRate: number;
        wholeSaleRate: number;
        markup: number;
        rateSource: string;
        rateDate: string;
        rateTime: string;
        status: string;
        signature: string;
    };
    trip?: {
        route: string;
        type: string;
        depart: string;
    };
    passengers?: [
        {
            sku: string;
            product: string;
            email: string;
            firstname: string;
            lastname: string;
            code: string;
            phone: string;
            status: string;
            type: string;
            price: number;
        }
    ];
}
export interface NiubizOrderPagoEfectivo {
    channel: string;
    email: string;
    firstName: string;
    amount: number;
    externalTransactionId: string;
}
export interface NiubizOrderCallbackPagoEfectivo {
    operationNumber: string;
    cip: number;
    status: string;
    amount: number;
}

export interface NiubizOrderConfirmation {
    channel: string;
    captureType: string;
    order: {
        purchaseNumber: string;
        amount: number;
        currency: string;
        transactionId: string;
    };
    sponsored?: {
        merchantId: string;
        name: string;
        mcci: string;
        address: string;
        phoneNumber: string;
    };
}

function useNiubiz(auth: {
    user: string;
    password: string;
    merchantId: string;
    sandbox: string;
}) {
    const message = "No se realizó el pago correctamente: ";
    /**
     *
     * https://desarrolladores.niubiz.com.pe/docs/api-de-seguridad
     */
    async function onSecurity() {
        const response = await fetch(
            `${auth.sandbox}/api.security/v1/security`,
            {
                headers: {
                    Authorization: `Basic ${btoa(
                        `${auth.user}:${auth.password}`
                    )}`,
                },
            }
        );
        const result = await response.text();
        return result;
    }

    // https://desarrolladores.niubiz.com.pe/docs/api-de-autorizaci%C3%B3n
    async function onAuthorization(order: NiubizOrderCreditCard) {
        const security = await onSecurity();
        const merchantId = auth.merchantId;
        const response = await fetch(
            `${auth.sandbox}/api.authorization/v3/authorization/ecommerce/${merchantId}`,
            {
                method: "POST",
                headers: {
                    Authorization: security,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(order),
            }
        );
        const result = await response.json();
        if (!response.ok) throw new Error(result.errorMessage ?? message);

        return result;
    }
    /**
     *
     * @param signature
     * @returns
     * https://desarrolladores.niubiz.com.pe/docs/api-de-anulaci%C3%B3n
     */
    async function onAnulacion(signature: number) {
        const security = await onSecurity();
        const response = await fetch(
            `${auth.sandbox}/api.authorization/v3/void/ecommerce/${auth.merchantId}/${signature}`,
            {
                method: "PUT",
                headers: {
                    Authorization: security,
                    "Content-Type": "application/json",
                },
            }
        );
        const result = await response.json();
        if (!response.ok) throw new Error(result.errorMessage ?? message);

        return result;
    }

    async function onAntifraude(body: NiubizAntifraude) {
        const security = await onSecurity();
        const response = await fetch(
            `${auth.sandbox}/api.antifraud/v1/antifraud/ecommerce/${auth.merchantId}`,
            {
                method: "POST",
                headers: {
                    Authorization: security,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            }
        );
        const result = await response.json();
        if (!response.ok) throw new Error(result.errorMessage ?? message);

        return result;
    }

    async function onConsultaBin(bin: string) {
        const security = await onSecurity();
        const response = await fetch(
            `${auth.sandbox}/api.ecommerce/v2/queryBin/${bin}`,
            {
                method: "GET",
                headers: {
                    Authorization: security,
                    "Content-Type": "application/json",
                },
            }
        );
        const result = await response.json();
        return result;
    }
    async function onElegibilidadDCC(body: {
        card: { binNumber: string; last4Digits: string };
        order: {
            currency: string;
            amount: number;
        };
    }) {
        const merchantId = auth.merchantId;
        const security = await onSecurity();
        const response = await fetch(
            `${auth.sandbox}/api.ecommerce/v2/currency/conversion/${merchantId}`,
            {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                    Authorization: security,
                    "Content-Type": "application/json",
                },
            }
        );
        const result = await response.json();
        return result;
    }

    async function onConfirmacion(order: NiubizOrderConfirmation) {
        const security = await onSecurity();
        const response = await fetch(
            `${auth.sandbox}/api.confirmation/v1/confirmation/ecommerce/${auth.merchantId}`,
            {
                method: "POST",
                headers: {
                    Authorization: security,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(order),
            }
        );
        const result = await response.json();
        if (!response.ok) throw new Error(result.errorMessage ?? message);

        return result;
    }

    async function getIp() {
        const ipResponse = await fetch("https://api.ipify.org");
        const ipResult = await ipResponse.text();
        return ipResult;
    }

    /**
     *
     * @param order
     * https://desarrolladores.niubiz.com.pe/docs/pago-con-yape
     */
    async function onYape(order: NiubizOrderYape) {
        const security = await onSecurity();
        const response = await fetch(
            `${auth.sandbox}/api.yape/v2/yape/transaction/${auth.merchantId}`,
            {
                method: "POST",
                headers: {
                    Authorization: security,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(order),
            }
        );
        const result = await response.json();

        if (!response.ok) throw new Error(result.responseMessage ?? message);
        return result;
    }
    /**
     *
     * @param order
     * https://desarrolladores.niubiz.com.pe/docs/pago-con-pagoefectivo
     */
    async function onPagoEfectivo(order: NiubizOrderPagoEfectivo) {
        const security = await onSecurity();
        const response = await fetch(
            `${auth.sandbox}/api.pagoefectivo/v1/create/${auth.merchantId}`,
            {
                method: "POST",
                headers: {
                    Authorization: security,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(order),
            }
        );
        const result = await response.json();
        return result;
    }

    /**
     *
     * @param order
     * https://desarrolladores.niubiz.com.pe/docs/callback-pago-efectivo
     */
    async function onCallBackPagoEfectivo(
        order: NiubizOrderCallbackPagoEfectivo
    ) {
        const security = await onSecurity();
        const response = await fetch(
            "${auth.sandbox}/api.pagoefectivocallback/v1/callback",
            {
                method: "POST",
                headers: {
                    Authorization: security,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(order),
            }
        );
        const result = await response.json();
        return result;
    }

    async function onCertificadoApp() {
        const security = await onSecurity();
        const response = await fetch(
            `${auth.sandbox}/api.certificate/v1/query/${auth.merchantId}`,
            {
                method: "POST",
                headers: {
                    Authorization: security,
                    "Content-Type": "application/json",
                },
            }
        );
        const result = await response.json();
        return result;
    }
    return {
        onAuthorization,
        onYape,
        onConsultaBin,
        onElegibilidadDCC,
        onPagoEfectivo,
        onCallBackPagoEfectivo,
        onAnulacion,
        onConfirmacion,
        onAntifraude,
        onCertificadoApp,
        getIp,
    };
}

export default useNiubiz;
