/*
Escreva um programa para simular uma fila de espera em uma central
de atendimento ao cliente. O programa deve iniciar exibindo na tela um
menu interativo contendo a lista de todos os clientes esperando
atendimento, mostrando a posição ao lado do nome (ex.: 1o João, 2o
Maria, etc).

O menu deve permitir escolher entre as seguintes opções:

1 - “Novo Cliente”: Adiciona um novo cliente ao final da fila
(solicitando o nome do cliente).

2 - “Atender Cliente”: Retira o primeiro cliente da fila e exibe o
nome do cliente que está sendo atendido.

3 - “Sair”: Encerra o programa.

O programa só deve ser encerrado ao escolher a opção 3. Caso
contrário, ele deve retornar ao menu principal.
*/

function novoCliente(fila) {
    let nome = window.prompt("Insira o Nome do Cliente.");
    console.log("Insira o nome do cliente");
    console.log(nome);
    fila.push(nome);
    return fila;
}

function atenderCliente(fila) {
    if(fila.length === 0 ) {
        console.log("A fila não possui clientes");
        return fila;
    }
    console.log(`Atendendo o cliente ${fila[0]}...`);
    fila.splice(0, 1);
    return fila;
}

let filaClientes = [];
let filaFormatada = [];
let continuar = true;

while(continuar) {
    console.log("===Seja bem vindo à central de atendimento!===");
    filaFormatada = filaClientes.map((nome, index) => `${index + 1}° ${nome}`).join(", ");
    console.log("Fila atual: " + (filaFormatada || "Lista vazia"));
    console.log("O que deseja fazer?");
    console.log("1 - Novo Cliente");
    console.log("2 - Atender Cliente");
    console.log("3 - Sair");
    let opcao = Number(window.prompt("Escolha uma opção."));
    console.log(opcao);

    switch (opcao) {
        case 1:
            console.log("Opção 1 selecionada.");
            filaClientes = novoCliente(filaClientes);
            break; 

        case 2:
            console.log("Opção 2 selecionada.");
            filaClientes = atenderCliente(filaClientes);
            break;

        case 3:
            console.log("Opção 3 selecionada.");
            console.log("Saindo...");
            continuar = false;
            break;

        default:
            console.log("Opção inválida. Tente novamente.");

            break;
    }
}
