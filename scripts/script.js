window.onload = function() {
  alert('Bem-vindo ao meu portfólio!');
}

// Alternar entre modo claro e escuro
const toggleButton = document.getElementById('dark-mode-toggle');

toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');

    if (toggleButton.textContent === 'Modo Escuro') {
        toggleButton.textContent = 'Modo Claro';
    } else {
        toggleButton.textContent = 'Modo Escuro';
    }
});