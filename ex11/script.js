/*
Escreva um programa que receba uma lista de números inteiros e
armazene-os em um array. O programa deve verificar quantos números
do vetor estão em ordem crescente em relação ao número anterior e
exibir essa informação.

Requisitos:

1. Solicite ao usuário a quantidade de números que ele deseja
inserir no vetor e, em seguida, peça que insira cada número.

2. Verifique cada par consecutivo de números no vetor e identifique
se estão em ordem crescente (ou seja, se o próximo número é
maior que o anterior).

3. Imprima quantos números estão em ordem crescente em relação
ao número anterior.

Exemplo: [6,1,3,2,1,7]
Impressão no console: 2

*/

function contNumCrescente(vetor){
    let tam = vetor.length;
    if(tam === 1) {
        console.log(0);
        return;
    }
    let cont = 0;
    for(let i = 1; i < tam; i++) {
        if(vetor[i] > vetor[i-1]) {
            cont = cont + 1;
        }
    }
    console.log(cont);

}

let tam = Number(window.prompt("Insira o tamanho do vetor"));
let vetor = [];
if(!isNaN(tam) && Number.isInteger(tam) && tam > 0) {
    for(let i = 0; i < tam; i++){
        let num = Number(window.prompt(`Insira o ${i + 1}º elemento do vetor.`));
        vetor.push(num);
    }
    console.log(vetor);
    contNumCrescente(vetor);   
}

