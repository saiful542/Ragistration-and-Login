const form = document.forms['login-form']
const userEmail = document.querySelector('.login-form .user-email')
const loginButton = document.querySelector('.login-form .login-button')
const mailError = document.querySelector('.user-email').parentElement.parentElement.parentElement.lastElementChild
let validation = false;

console.log(mailError)



loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    checkEmailFieldError()

    const savedUser = JSON.parse(localStorage.getItem('user'))
    console.log(savedUser)
    if (validation) {
        if (savedUser && (savedUser.email == userEmail.value)){
            console.log('woo')
            window.location.href='../second_login_page.html'
        }
        else{
            mailError.innerHTML = `<div class="error-wrapper"><svg aria-hidden="true" class="stUf5b LxE1Id" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg><p>Couldn't find your Google Account</p></div>`
        }
    }
})



// checkEmailFieldError

const checkEmailFieldError = () => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!userEmail.value) {
        mailError.innerHTML = `<div class="error-wrapper"><svg aria-hidden="true" class="stUf5b LxE1Id" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg><p>Choose a Gmail address</p></div>`
        validation = false;
    }
    else if (!userEmail.value.match(mailformat)) {
        mailError.innerHTML = `<div class="error-wrapper"><svg aria-hidden="true" class="stUf5b LxE1Id" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg><p>You have entered an invalid email address</p></div>`
        validation = false;
    }
    else {
        mailError.innerHTML = `<div></div>`
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