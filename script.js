const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const loginButton = document.getElementById('login-button');
const formAgreement = document.getElementById('agreement');
const formButton = document.getElementById('submit-btn');

formButton.disabled = true;

function loginChecker(event) {
  event.preventDefault();
  let message = '';
  if (loginEmail.value === 'tryber@teste.com' && loginPassword.value === '123456') {
    message = 'Olá, Tryber!';
  } else {
    message = 'Email ou senha inválidos.';
  }
  return alert(message);
}

loginButton.addEventListener('click', loginChecker);

if (formAgreement.value === checked) {
  formButton.disabled = false;
}
