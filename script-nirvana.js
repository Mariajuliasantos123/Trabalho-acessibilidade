document.addEventListener('DOMContentLoaded', function () {
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');
    const body = document.body;

    const FONT_INCREMENT = 0.1;
    const MAX_FONT_SIZE = 1.5;
    const MIN_FONT_SIZE = 0.8;

    let tamanhoAtualFonte = parseFloat(localStorage.getItem('fontSize')) || 1;
    body.style.setProperty('--font-size', `${tamanhoAtualFonte}rem`);

    const contrasteAtivo = localStorage.getItem('altoContraste') === 'true';
    if (contrasteAtivo) {
        body.classList.add('alto-contraste');
    }

    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
    });

    aumentaFonteBotao.addEventListener('click', function () {
        if (tamanhoAtualFonte < MAX_FONT_SIZE) {
            tamanhoAtualFonte += FONT_INCREMENT;
            body.style.setProperty('--font-size', `${tamanhoAtualFonte}rem`);
            localStorage.setItem('fontSize', tamanhoAtualFonte);
        }
    });

    diminuiFonteBotao.addEventListener('click', function () {
        if (tamanhoAtualFonte > MIN_FONT_SIZE) {
            tamanhoAtualFonte -= FONT_INCREMENT;
            body.style.setProperty('--font-size', `${tamanhoAtualFonte}rem`);
            localStorage.setItem('fontSize', tamanhoAtualFonte);
        }
    });

    alternaContraste.addEventListener('click', function () {
        body.classList.toggle('alto-contraste');
        const isContrasteAtivo = body.classList.contains('alto-contraste');
        localStorage.setItem('altoContraste', isContrasteAtivo);
    });
});

ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#historia', { delay: 500 });
ScrollReveal().reveal('#galeria', { delay: 500 });
ScrollReveal().reveal('#contato', { delay: 500 });