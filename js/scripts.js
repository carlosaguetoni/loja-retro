// Validação do formulário de contato para evitar envio com campos vazios ou inválidos
document.getElementById('formContato').addEventListener('submit', function (e) {
  e.preventDefault(); // Impede o envio automático do formulário

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const erro = document.getElementById('erro');
  const sucesso = document.getElementById('sucesso');

  // Limpa mensagens anteriores
  erro.textContent = '';
  sucesso.textContent = '';

  // Verifica se o nome está preenchido
  if (!nome) {
    erro.textContent = 'Por favor, preencha seu nome.';
    return;
  }

  // Verifica se o email é válido (contém '@')
  if (!email || !email.includes('@')) {
    erro.textContent = 'Por favor, insira um email válido.';
    return;
  }

  // Verifica se a mensagem foi escrita
  if (!mensagem) {
    erro.textContent = 'Por favor, escreva uma mensagem.';
    return;
  }

  // Se passou nas validações, exibe mensagem de sucesso e reseta o formulário
  sucesso.textContent = 'Mensagem enviada com sucesso!';
  this.reset();
});

// Cria um modal simples com alerta ao clicar em cada card de jogo
const cards = document.querySelectorAll('.jogo-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    alert(`Você clicou em: ${card.querySelector('h2').textContent}`);
  });
});

// Efeito hover no botão "Enviar" do formulário de contato
const botaoEnviar = document.querySelector('form#formContato button');

if (botaoEnviar) {
  // Quando o mouse entra no botão, muda a cor e o texto
  botaoEnviar.addEventListener('mouseenter', () => {
    botaoEnviar.style.backgroundColor = '#ff9800';
    botaoEnviar.textContent = 'Pronto para enviar!';
  });

  // Quando o mouse sai do botão, volta ao estilo original
  botaoEnviar.addEventListener('mouseleave', () => {
    botaoEnviar.style.backgroundColor = '';
    botaoEnviar.textContent = 'Enviar';
  });
}
