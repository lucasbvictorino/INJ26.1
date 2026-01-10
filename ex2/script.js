/*
Escreva um programa que:

1 - Solicite ao usuário um número inteiro positivo e calcule o seu
fatorial.

2 - Pergunte ao usuário se ele quer calcular o fatorial de outro
número. Se o usuário digitar "S" ou “s”, o programa deve reiniciar e
permitir outro cálculo; se digitar "N" ou “n”, o programa deve
encerrar.

3 - Valide a entrada do usuário para garantir que apenas números
inteiros positivos são aceitos. Se o usuário digitar um número
inválido, exiba uma mensagem de erro e peça a entrada
novamente.

*/

function calcularFatorial(num) {
    if(num === 1) {
        return num;
    }
    return (num * calcularFatorial(num - 1));
}

let continuar = true;
let num;

while(continuar) {
    num = Number(window.prompt("Insira um número inteiro e positivo para calcular o seu fatorial."));
    if(num === null){
        console.log("Insira um valor");
    }
    else if(num <= 0 || isNaN(num) || !Number.isInteger(num)) {
        console.log("Insira um número inteiro positivo");
    }
    else {
        let res = calcularFatorial(num);
        console.log(`O valor do fatorial de ${num} é ${res}.`);
        let respUsuario = window.prompt("Deseja calcular o fatorial de outro número? (S/n)");
        if(respUsuario === "S" || respUsuario === "s")  continue;
        else continuar = false;
    }
}