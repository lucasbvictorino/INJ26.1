/*
Escreva um programa que:

1. Solicite ao usuário um número inteiro positivo n, que representa o
número de termos que ele deseja ver da sequência de Fibonacci.

2. Implemente uma função recursiva chamada fibonacci que recebe
um número n e retorna os n primeiros termos da sequência de
Fibonacci, onde:

○ Fibonacci(0) = 0
○ Fibonacci(1) = 1
○ Para n>1: Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2)

3. Exiba os n primeiros termos da sequência de Fibonacci.
*/
// 0 1 1 2 3

function calcularFibonacci(n) {
    if(n === 0) return 0;
    if(n === 1) return 1;
    let termoAtual = calcularFibonacci(n-2) + calcularFibonacci(n-1);
    return termoAtual;
}

n = Number(window.prompt("Insira um número inteiro e positivo"));
if(!isNaN(n) && Number.isInteger(n) && n > 0) {
    for(let i = 0; i < n; i++) {
        console.log(calcularFibonacci(i));
    }
}
else {
    console.log("Valor inválido");
}

