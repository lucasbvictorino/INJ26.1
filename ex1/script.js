/*
Escreva um programa em que o usuário insira os coeficientes a, b e c
de uma equação quadrática da forma:    ax² + bx + c = 0

O programa deve:

1 - Calcular o discriminante (Δ) pela fórmula Δ = b² − 4ac

2 - Avaliar o valor de Δ para determinar o número de raízes reais.
    2.1 - Se Δ > 0 , exibir as duas raízes reais e distintas.
    2.2 - Se Δ = 0 , exibir uma raiz real (raiz dupla).    
    2.3 - Se Δ < 0, informar que a equação não possui raízes reais.
3 - Usar a fórmula de Bhaskara para calcular as raízes (caso existam)
e imprimir na tela tais raízes:

    x1 = (-1*b + raiz(Δ))/(2*a)
    x2 = (-1*b - raiz(Δ))/(2*a)
*/

function calcularDelta(a, b, c) {
    let delta = b*b - 4*a*c;
    console.log("O valor de Delta é: " + delta);
    return delta;
}

function calcularBhaskara(a, b, c) {
    let delta = calcularDelta(a, b, c);
    // Avaliação
    if(delta > 0) {
        let x1 = ((-1*b + Math.sqrt(delta))/(2*a)).toFixed(4);
        let x2 = ((-1*b - Math.sqrt(delta))/(2*a)).toFixed(4);
        console.log("A equação possui duas raízes reais");
        console.log(x1);
        console.log(x2);
    }
    else if(delta === 0) {
        let x = ((-1*b + Math.sqrt(delta))/(2*a)).toFixed(4);
        console.log("A equação possui uma raiz real");
        console.log(x);
    }
    else {
        console.log("A equação não possui raízes reais.");
    }
}
