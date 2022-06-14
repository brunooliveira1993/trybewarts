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

const dataForm = document.getElementById('form-data');
const formulario = document.getElementById('evaluation-form');
const family = document.getElementsByName('family');
const rateValue = document.getElementsByName('rate');
const materiaMark = document.getElementsByClassName('subject');
const inputNameId = document.getElementById('input-name');
const inputLastNameId = document.getElementById('input-lastname');
const inputEmailId = document.getElementById('input-email');
const houseId = document.getElementById('house');

formulario.addEventListener('submit', (event) => {
  event.preventDefault();
  formulario.style.display = 'none';
  const name = `${inputNameId.value} ${inputLastNameId.value}`;
  const email = inputEmailId.value;
  const casa = houseId.value;

  let familyName = '';
  for (let i = 0; i < family.length; i += 1) {
    if (family[i].checked === true) {
      familyName = family[i].value;
    }
  }

  let materia = '';
  for (let i2 = 0; i2 < materiaMark.length; i2 += 1) {
    if (materiaMark[i2].checked === true) {
      materia = `${materia + materiaMark[i2].value}, `;
      console.log(materia);
    }
  }

  materia = materia.substring(0, materia.length - 4);

  let rate = '';
  for (let i3 = 0; i3 < rateValue.length; i3 += 1) {
    if (rateValue[i3].checked === true) {
      rate = rateValue[i3].value;
    }
  }

  const obs = digito.value;

  dataForm.innerText = `Nome: ${name}
  Email: ${email}
  Casa: ${casa}
  Família: ${familyName}
  Matérias: ${materia}
  Avaliação: ${rate}
  Observações: ${obs}`;
});
