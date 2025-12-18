// Arquivo: script.js (na pasta raiz do projeto)

// Garante que o script só rode depois que a página inteira carregou
document.addEventListener('DOMContentLoaded', function() {

    // 1. Inicializa a biblioteca de animações (AOS) - UMA ÚNICA VEZ
    AOS.init({
        duration: 800,      // Duração da animação
        once: true,         // Animação acontece apenas uma vez
        offset: 100,        // Começa a animar um pouco antes do elemento aparecer na tela
    });

    // 2. Renderiza os ícones da biblioteca Lucide
    // Isso transforma todas as tags <i data-lucide="..."> em ícones SVG no site inteiro.
    try {
        lucide.createIcons();
    } catch (error) {
        console.error('Erro ao renderizar os ícones do Lucide:', error);
    }

    // 3. Adiciona a funcionalidade de rolagem suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});