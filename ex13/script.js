/*
Você está desenvolvendo um sistema para gerenciar jogadores de um
time de esportes. Cada jogador deve ter as seguintes propriedades:
● Nome (string)
● Idade (número)
● Posição (string)
● Pontuação (número)

Implemente as seguintes funcionalidades:

1. Crie um array vazio chamado time para armazenar os jogadores
cadastrados.

2. Escreva uma função chamada adicionarJogador que:
- Recebe como parâmetros os dados de um jogador (nome,
idade, posição e pontuação). Observação: esses dados
devem ser inseridos pelo usuário.
- Cria um objeto representando o jogador e o adiciona ao
array time.

3. Escreva uma função chamada buscarPorPosicao que:
- Recebe como parâmetro uma string representando a
posição. Observação: esse dado deve ser inserido pelo
usuário.
- Retorna todos os jogadores dessa posição. Se não houver
jogadores, exiba uma mensagem apropriada.

4. Escreva uma função chamada listarTime que:
- Imprime todos os jogadores cadastrados no time no
console, um por linha.
5. Escreva uma função chamada calcularPontuacaoMedia que:
- Calcula e retorna a pontuação média de todos os jogadores
do time.
6. O programa deve iniciar exibindo o seguinte menu interativo, que
deve permitir ao usuário escolher uma das opções:
    1 - Adicionar jogador
    2 - Buscar por posição
    3 - Listar time
    4 - Calcular pontuação média
    5 - Sair
O programa só deve ser encerrado ao escolher a opção 5. Caso
contrário, ele deve retornar ao menu interativo.
    //{
        //nome: nome,
        //idade: idade,
        //posicao: posicao,
        //pontuacao: pontuacao
    //}
*/

function adicionarJogador(nome, idade, posicao, pontuacao, time) {
    time.push(
        {
            nome: nome,
            idade: idade, 
            posicao: posicao, 
            pontuacao: pontuacao
        }
    );
    return time;
}

function buscarPorPosicao(posicao, time) {
    const jogadoresDaPos = time.filter((jogador) => {
        if(jogador.posicao.toLowerCase() === posicao.toLowerCase()){
            return jogador;
        }
    })  
    if(jogadoresDaPos.length === 0) {
        console.log("Não existem jogadores da posição solicitada");
        return [];
    }
    return jogadoresDaPos;
}

function listarTime(time) {
    if(time.length === 0) {
        console.log("Time ainda sem jogadores");
        return;
    }
    console.log("--------");
    time.forEach((jogador) => {
        console.log(jogador);
        console.log("--------");
    });
}

function calcularPontuacaoMedia(time) {
    let tam = time.length;

    if(tam === 0) return 0;

    let media = 0;
    for(let i = 0; i < tam; i++) {
        media = media + time[i].pontuacao;
    }
    media = media/tam;
    return media;
}


let continuar = true;
let arrayTime = [];

while(continuar) {
    console.log("===O que deseja fazer?===");
    console.log("1 - Adicionar jogador");
    console.log("2 - Buscar por posição");
    console.log("3 - Listar time");
    console.log("4 - Calcular pontuação média");
    console.log("5 - Sair");
    let opcao = Number(window.prompt("Escolha uma opção."));
    console.log(opcao);

    switch (opcao) {
        case 1:
            console.log("Opção 1 selecionada.");
            let nome = window.prompt("Insira o nome do jogador");
            let idade = Number(window.prompt("Insira a idade do jogador"));
            let posicao = window.prompt("Insira a posição do jogador");
            let pontuacao = Number(window.prompt("Insira a pontuação do jogador"));
            arrayTime = adicionarJogador(nome, idade, posicao, pontuacao, arrayTime);
            break;
        case 2:
            console.log("Opção 2 selecionada.");
            let pos = window.prompt("Insira uma posição para buscar os seus jogadores.");
            let jogadores = buscarPorPosicao(pos, arrayTime);
            console.log(jogadores);
            break;
        case 3:
            console.log("Opção 3 selecionada.");
            console.log("Mostrando jogadores do time...");
            listarTime(arrayTime);
            break;
        case 4:
            console.log("Opção 4 selecionada.");
            console.log("Calculando a pontuação média...");
            let media = calcularPontuacaoMedia(arrayTime);
            console.log(media.toFixed(2));
            break;
        case 5:
            console.log("Opção 5 selecionada.");
            console.log("Saindo...");
            continuar = false;
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
            break;
    }
}

