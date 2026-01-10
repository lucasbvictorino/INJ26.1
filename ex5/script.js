/*
Elabore um algoritmo que peça para o usuário inserir um número
inteiro e realize o seguinte:
● Caso o valor seja divisível por 3, imprima “fizz”.
● Caso o valor seja divisível por 5 imprima “buzz”.
● Caso o valor seja divisível por 3 e 5, ao mesmo tempo, imprima
“fizzbuzz”.
● Caso contrário imprima nada.

*/

function fizzbuzz(num) {
    if((num % 5) === 0 && (num % 3) === 0) {
        console.log("fizzbuzz");
    }
    else if(num % 3 === 0) {
        console.log("fizz");
    }
    else if(num % 5 === 0) {
        console.log("buzz");
    }
    else{
        // Sem impressão
    }
}

num = Number(window.prompt("Insira um número inteiro."));
fizzbuzz(num);

