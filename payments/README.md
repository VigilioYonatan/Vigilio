# NUMERO A LETRAS

<img src="../logo.png" width="150"/>
<br/>
A simple library to convert number  to string money - custom money to spanish

### NIUBIZ

```ts
const { onAntifraude, onAuthorization, onConfirmacion, onYape, getIp } = niubiz(
    {
        merchantId,
        user,
        password,
        sandbox,
    }
);

const antifraude = await onAntifraude({
    channel: "web", // tipo
    order,
    clientIp: ip, // ip de usuario
    merchantDefineData,
    card,
    cardHolder,
});

const tokenId = antifraude.token.tokenId;
const authorization = await onAuthorization({
    channel: "web",
    captureType: "manual",
    countable: true,
    order: { ...order, tokenId },
    card,
    cardHolder,
});
const confirmation = await onConfirmacion({
    channel: "web",
    captureType: "manual",
    order: {
        ...order,
        transactionId: authorization.order.transactionId,
    },
});
```

## PAYPA

```ts
const { createOrder, captureOrder } = paypal({
    client_id,
    secret_key,
    sandbox,
});

const result = await createOrder({
    intent: "CAPTURE",
    purchase_units: [
        {
            amount: {
                currency_code: "USD",
                value: String(total.toFixed(2)),
            },
        },
    ],
    application_context: {
        brand_name: information!.name,
        // payment_method: "IMMEDIATE_PAYMENT_REQUIRED",
        // locale: "en-US",
        landing_page: "NO_PREFERENCE",
        // shipping_preference: "SET_PROVIDED_ADDRESS",
        user_action: "PAY_NOW",
        return_url: `/paypal/success`,
        cancel_url: `/paypal/cancel`,
    },
});
if (result.status !== "CREATED")
    throw new BadRequestException(
        "Hubo un problema al realizar esta orden. Intentalo de nuevo más tarde."
    );
```
