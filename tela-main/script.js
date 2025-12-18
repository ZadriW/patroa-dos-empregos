document.addEventListener('DOMContentLoaded', function() {

    // Comando para inicializar as animações do AOS
    AOS.init({
        duration: 800,     
        once: true,         
        offset: 100,       
    });

    // Comando para renderizar os ícones do Lucide
    try {
        lucide.createIcons();
    } catch (error) {
        console.error('Erro ao renderizar os ícones do Lucide:', error);
    }

});