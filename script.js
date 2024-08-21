let botoes = document.querySelectorAll(".botoes button");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

let currentIndex = 0;


function atualizarImagem(index) {
    let botaoAtivo = document.querySelector(".botaoAtivo");
    if (botaoAtivo) botaoAtivo.classList.remove("botaoAtivo");

    let imagemAtiva = document.querySelector(".fotoAtiva");
    if (imagemAtiva) imagemAtiva.classList.remove("fotoAtiva");

    let informacoesAtiva = document.querySelector(".informacoes.ativa");
    if (informacoesAtiva) informacoesAtiva.classList.remove("ativa");

    imagens[index].classList.add("fotoAtiva");
    informacoes[index].classList.add("ativa");

   
}



document.getElementById("proxima").addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imagens.length;
    atualizarImagem(currentIndex);
});


botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        clearInterval(intervalo);
        currentIndex = index;
        atualizarImagem(currentIndex);
    });
});
