# NUMERO A LETRAS

<img src="../logo.png" width="150"/>
<br/>
A simple library to convert number  to string money - custom money to spanish

### Getting Started

### MODAL

```ts
import numeroALetras from "@vigilio/numeros-a-letras";
console.log(numeroALetras(1040.34)); // UN MIL CUARENTA CON TREINTA Y CUATRO
console.log(numeroALetras(1040.34, true)); // UN MIL CUARENTA SOL CON TREINTA Y CUATRO CENTIMO
console.log(numeroALetras(100.34, false)); // CIEN SOL CON TREINTA Y CUATRO CENTIMO
console.log(numeroALetras(100.34, false)); // CIEN SOL CON TREINTA Y CUATRO CENTIMO
console.log(numeroALetras(1040.34, true, { isInvoice: true })); // UN MIL CUARENTA SOLES 34/100 SOLES
console.log(numeroALetras(1040.34, false, { isInvoice: true })); // UN MIL CUARENTA 34/100
console.log(numeroALetras(1040.34, true, { isInvoice: false })); // UN MIL CUARENTA SOLES CON TREINTA Y CUATRO CENTIMO
console.log(numeroALetras(1040.34, false, { isInvoice: false })); //UN MIL CUARENTA CON TREINTA Y CUATRO
console.log(
    numeroALetras(1040.34, true, {
        centPlural: "CENTAVOS",
        centSingular: "CENTAVO",
        Monedaplural: "PESOS",
        Monedasingular: "PESO",
    })
); // UN MIL CUARENTA PESOS CON TREINTA Y CUATRO CENTAVO
console.log(
    numeroALetras(1040.34, true, {
        centPlural: "CENTAVOS",
        centSingular: "CENTAVO",
        Monedaplural: "PESOS",
        Monedasingular: "PESO",
        isInvoice: true,
    })
); //UN MIL CUARENTA PESOS 34/100 PESOS
```
