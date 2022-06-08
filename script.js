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

const digito = document.getElementById('text-area');

digito.addEventListener('keypress', (event) => {
  const input = digito.value.length;
  const maxChars = 500;
  const contador = document.getElementById('counter');

  contador.innerHTML = maxChars - digito.textLength;

  if (input >= maxChars) {
    event.preventDefault();
  }
});

const check = document.getElementById('agreement');

check.addEventListener('click', () => {
  const buttonOn = document.getElementById('submit-btn');
  if (check.checked === true) {
    buttonOn.disabled = false;
  }
});

// contaCaracteres(campo){
//   var maxChar = 500;
//   var input = campo.value.length;
//   var maxlength = document.getElementById('text-area').setAttribute('maxlength', maxChar)
//   var contador = document.getElementById('counter')
//   var charNumber = maxChar - input
//   contador.innerHTML = charNumber

// }
