/*

Elabore um algoritmo para ler um valor monetário em reais (R$) e
convertê-lo para as moedas euro (€) e dólar americano (US$),
considerando as seguintes taxas de câmbio:

● Taxa de câmbio para euro: €1 = R$6,10
● Taxa de câmbio para dólar: $1 = R$5,70

Imprima na tela o valor em reais inserido pelo usuário e suas
conversões para dólar americano e euro.

*/

function converterValor(valorReais) {
    console.log(`O valor em reais inserido foi de R$${valorReais}`);
    let valorEuro = valorReais*(1/6.10);
    let valorDolarUS = valorReais*(1/5.70);

    console.log(`A conversão para o euro dá €${valorEuro.toFixed(2)}`);
    console.log(`A conversão para o dólar americano dá US$${valorDolarUS.toFixed(2)}`);
}

num = Number(window.prompt("Insira um valor monetário em Reais (R$)."));
converterValor(num);

