/*
Escreva um programa que verifique se uma frase é um palíndromo. Um
palíndromo é uma sequência que pode ser lida da mesma maneira da
esquerda para a direita e da direita para a esquerda.

Requisitos:

1. Solicite ao usuário uma frase.
2. Remova todos os espaços e ignore a diferença entre letras
maiúsculas e minúsculas.
3. Verifique se a frase é igual quando lida ao contrário e informe se
ela é um palíndromo ou não.

Dica: Use toLowerCase() e split().

*/
function verPalindromo(frase) {
    let fraseInv = frase.split("").reverse().join("");
    if (frase === fraseInv) {
        console.log("A frase inserida é um palíndromo");
    } else {
        console.log("A frase inserida não é um palíndromo");
    }

}

let frase = window.prompt("Insira uma frase.");
//console.log(frase);
let fraseMod = frase.replaceAll(" ", "");
fraseMod = fraseMod.toLowerCase();
//console.log(fraseMod);
verPalindromo(fraseMod);
