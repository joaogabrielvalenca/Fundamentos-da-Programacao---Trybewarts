const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const loginButton = document.getElementById('login-button');

function loginChecker () {
  if (loginEmail.innerText === 'tryber@teste.com' && loginPassword.innerText === 123456) {
    return alert('Olá, Tryber!');
  }
}


loginButton.addEventListener('submit', loginChecker);
