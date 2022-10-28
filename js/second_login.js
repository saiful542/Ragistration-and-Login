const form = document.forms['login-form']
const userPassword = document.querySelector('.login-form .user-password')
const loginButton = document.querySelector('.login-form .login-button')
const passwordError=document.querySelector('.user-password').parentElement.parentElement.parentElement.lastElementChild
const check = document.querySelector('.checkbox-wrapper .check')
const checkWrapper = document.querySelector('.checkbox-wrapper')
let validation = false;
const savedUser = JSON.parse(localStorage.getItem('user'))
document.querySelector('.user-email-wrapper').innerHTML=`<p>${savedUser.email}</p>`

console.log(userPassword)



loginButton.addEventListener('click', (e) => {

    e.preventDefault();
    checkPasswordFieldError()
    // const savedUser = JSON.parse(localStorage.getItem('user'))
    console.log(savedUser)
    if (validation) {
        if (savedUser && (savedUser.password == userPassword.value)){
            window.location.href='../welcome.html'
        }
        else{
            passwordError.innerHTML = `<div class="error-wrapper"><svg aria-hidden="true" class="stUf5b LxE1Id" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg><p>Wrong password.Try again or click Forgot password to reset it.</p></div>`
        }
    }
})



// checkPasswordFieldError

const checkPasswordFieldError = () => {
    if (!userPassword.value) {
        passwordError.innerHTML = `<div class="error-wrapper"><svg aria-hidden="true" class="stUf5b LxE1Id" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg><p>Enter a password</p></div>`
        validation = false;
    }
    else {
        passwordError.innerHTML = `<div></div>`
        validation = true;
    }
}


form.addEventListener('change', (e) => {
    if (e.target.type != 'checkbox') {
        if (e.target.value) {
            e.target.nextElementSibling.classList.add('active')
        }
        else {
            e.target.nextElementSibling.classList.remove('active')
        }
    }
})


//showpassword
check.addEventListener('change', (e) => {
    if (check.checked) {
        userPassword.type = 'text'
        checkWrapper.classList.add('on-hover')
    }
    else {
        userPassword.type = 'password'
        checkWrapper.classList.remove('on-hover')
    }
})