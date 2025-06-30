// Arquivo: script.js (na pasta raiz do projeto)

// Garante que o script só rode depois que a página inteira carregou
document.addEventListener('DOMContentLoaded', function() {

    // 1. Inicializa a biblioteca de animações (AOS) - UMA ÚNICA VEZ
    AOS.init({
        duration: 800,     
        once: true,         
        offset: 100,       
    });

   
    try {
        lucide.createIcons();
    } catch (error) {
        console.error('Erro ao renderizar os ícones do Lucide:', error);
    }

    // 2. Adiciona a funcionalidade de rolagem suave para links internos
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