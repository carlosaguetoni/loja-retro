document.getElementById('formContato').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const erro = document.getElementById('erro');
  const sucesso = document.getElementById('sucesso');

  erro.textContent = '';
  sucesso.textContent = '';

  if (!nome) {
    erro.textContent = 'Por favor, preencha seu nome.';
    return;
  }

  if (!email || !email.includes('@')) {
    erro.textContent = 'Por favor, insira um email válido.';
    return;
  }

  if (!mensagem) {
    erro.textContent = 'Por favor, escreva uma mensagem.';
    return;
  }

  sucesso.textContent = 'Mensagem enviada com sucesso!';
  this.reset();
});

// Modal simples para exibir detalhes do jogo
const cards = document.querySelectorAll('.jogo-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    alert(`Você clicou em: ${card.querySelector('h2').textContent}`);
  });
});

// Efeito hover no botão de envio do formulário contato
const botaoEnviar = document.querySelector('form#formContato button');

if (botaoEnviar) {
  botaoEnviar.addEventListener('mouseenter', () => {
    botaoEnviar.style.backgroundColor = '#ff9800';
    botaoEnviar.textContent = 'Pronto para enviar!';
  });

  botaoEnviar.addEventListener('mouseleave', () => {
    botaoEnviar.style.backgroundColor = '';
    botaoEnviar.textContent = 'Enviar';
  });
}
