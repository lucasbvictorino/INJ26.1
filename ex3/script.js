/*
Crie uma função chamada verificarIdades que recebe um array de
anos de nascimento de várias pessoas. 

A função deve calcular a idade de cada pessoa com base no ano atual 
(inserido pelo usuário) e, para cada idade, determinar se a pessoa é maior
de idade (18 anos ou mais) ou menor de idade (menos de 18 anos). 

A função
deve retornar um array contendo "maior" para pessoas maiores de idade e 
"menor" para pessoas menores de idade, mantendo a ordem das idades 
verificadas. 

Após isso, a função deve imprimir na tela uma mensagem para 
cada pessoa, no formato:

    Pessoa 1: Maior de idade
    Pessoa 2: Menor de idade
            (...)
*/
// (yyyy)  
// [1968, 1989, 1999, 2001, 2003, 2002, 2000, 2006];
// numero || Inteiro || 4 digitos

function verificarIdades(nascimentos) {
    const anoAtual = new Date().getFullYear();
    let valido = true;
    nascimentos.map((anoNascimento) => {
        if(isNaN(anoNascimento)|| !Number.isInteger(anoNascimento) || !((anoNascimento.toString().length) === 4) || anoNascimento > anoAtual) valido = false
    })
    let avIdades = [];

    if(valido) {      
        nascimentos.map((anoNascimento, index) => {
            let idade = anoAtual - anoNascimento;
            //console.log(idade);
            if(idade >= 18) {
                console.log(`Pessoa ${index + 1}: Maior de idade`);
                avIdades.push("maior");
            } else {
                console.log(`Pessoa ${index + 1}: Menor de idade`);  
                avIdades.push("menor");
            }
        })
        /*
        avIdades.map((status) => {
            console.log(status);
        })
            */
    } else {
        console.log("Insira um array com anos de nascimentos válidos");
    }
    return avIdades;
}

//verificarIdades([1968, 1989, 1999, 2001, 2003, 2002, 2000, 2006, 2010]);
