const loginBtn = document.getElementById('login-button');

loginBtn.addEventListener('click', () => {
  const email = document.getElementById('email-input').value;
  const password = document.getElementById('password-input').value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const digito = document.querySelector('#textarea');
const maxChars = 500;
const contador = document.querySelector('#counter');

digito.addEventListener('input', () => {
  const input = digito.value.length;
  contador.innerText = maxChars - input;
});

const check = document.getElementById('agreement');

check.addEventListener('click', () => {
  const buttonOn = document.getElementById('submit-btn');
  if (check.checked === true) {
    buttonOn.disabled = false;
  }
});
