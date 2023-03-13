/* Objetivo - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente.
passo 1- dar um jeito de identifica o clique do usuario 
passo 2- dar um jeito de identificar o clique do usuario no botão
passo 3 - desmarcar o botão selecionado anterior
passo 4 - marcar o botão clicando ocmo se estivessse selecionada
passo 5 - esconder a imagem de fundo anterior
6- fazer aparecer a imagem de fundo correspondente ao botãõ clicado
 */

    //passo 1- dar um jeito de identifica o clique do usuario
    const botoesCarrosel = document.querySelectorAll(".botao");
    const imagens = document.querySelectorAll('.imagem');
    //passo 2- dar um jeito de identificar o clique do usuario no botão
    botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

    // passo 3 - desmarcar o botão selecionado anterior
    desativarBotaoSelecionado();

    //passo 4 - marcar o botão clicando ocmo se estivessse selecionada
    selecionarBotaoCarrosel(botao);

    //passo 5 - esconder a imagem ativa de fundo
    escondeImagemAtivaDeFundo();

    //6- fazer aparecer a imagem de fundo correspondente ao botão clicado
    mostraImagemDeFundo(indice);
    })
    
});
function mostraImagemDeFundo(indice) {
  imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
  botao.classList.add("selecionado");
}

function escondeImagemAtivaDeFundo() {
  const imagemAtiva = document.querySelector('.ativa');
  imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".selecionado");
  botaoSelecionado.classList.remove("selecionado");
}

