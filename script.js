const loginBtn = document.getElementById('login-button');
loginBtn.addEventListener('click', function () {
  const email = document.getElementById('email-input').value;
  const password = document.getElementById('password-input').value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  };
});
