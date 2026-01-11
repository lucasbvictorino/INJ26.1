/*
Implemente uma função chamada encontrarElementoUnico que recebe
um array de números inteiros onde cada elemento aparece exatamente
duas vezes, exceto por um elemento que aparece exatamente uma vez.
A função deve retornar o elemento que aparece apenas uma vez. Tal
elemento deve ser impresso na tela

*/

function encontrarElementoUnico(array) {
    let arrayAux = [];
    array.forEach((num) => {
        if(!arrayAux.includes(num)) {
            arrayAux.push(num)
        }
        else {
            arrayAux.splice(arrayAux.indexOf(num), 1);
        }
    });
    console.log(arrayAux[0]);
    return arrayAux[0];
}

encontrarElementoUnico([12, 4, 2, 12, 6, 4, 2]);


// encontrarElementoUnico([12, 4, 2, 12, 6, 4, 2])
// Math.ceil(num);