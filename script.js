// const emailInsert = ;
// const passwordInsert = ;
const loginBtn = document.getElementById('login-button');

function checkForm(event) {
    if (emailInsert === 'tryber@teste.com' && passwordInsert === 123456) {
        alert('Olá, Tryber!')
    } else {
        alert('Email ou senha inválidos')
    }
}

console.log(loginBtn);
loginBtn.addEventListener('click', console.log('não to surdo'))