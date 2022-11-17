const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const loginButton = document.getElementById('login-button');

function loginChecker() {
  let message = '';
  if (loginEmail.innerText === 'tryber@teste.com' && loginPassword.innerText === '123456') {
    message = 'Olá, Tryber!';
  } else {
    message = 'Email ou senha inválidos.';
  }
  return alert(message);
}

loginButton.addEventListener('submit', loginChecker);
