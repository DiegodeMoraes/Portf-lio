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

// Modal de projetos
const modal = document.getElementById('project-modal');
const closeModal = document.getElementsByClassName('close')[0];
const projectCards = document.querySelectorAll('.project-card');
const modalDescription = document.getElementById('modal-description');

// Abrir modal ao clicar no projeto
projectCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        modalDescription.textContent = `Você clicou no Projeto ${index + 1}. Aqui você pode adicionar mais detalhes.`;
        modal.style.display = 'block';
    });
});

// Fechar modal
closeModal.onclick = function() {
    modal.style.display = 'none';
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Validação de formulário
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault();
    } else if (!validateEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        event.preventDefault();
    }
});

// Função para validar e-mail
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Pega os repositórios do seu GitHub e exibe na seção de projetos
fetch('https://api.github.com/users/diegodemoraes/repos')
    .then(response => response.json())
    .then(repos => {
        const projectSection = document.getElementById('projects');
        repos.forEach(repo => {
            const repoCard = document.createElement('div');
            repoCard.classList.add('project-card');
            repoCard.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || 'Sem descrição disponível.'}</p>
                <a href="${repo.html_url}" target="_blank">Ver Projeto no GitHub</a>
            `;
            projectSection.appendChild(repoCard);
        });
    })
    .catch(error => console.error('Erro ao carregar repositórios:', error));

  