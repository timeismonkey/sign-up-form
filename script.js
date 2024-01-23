const pwd = document.querySelector('#password');
const confirmPwd = document.querySelector('#confirm-password');
const errorMessage = document.querySelector('.error-message');

confirmPwd.addEventListener('input', e => {
    if (confirmPwd.value !== pwd.value){
        errorMessage.textContent = '*Passwords do not match'
        confirmPwd.classList.add('error');
        pwd.classList.add('error');
    } else {
        errorMessage.textContent = '';
        confirmPwd.classList.remove('error');
        pwd.classList.remove('error');
    }
})