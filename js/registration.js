const form = document.forms['reg-form']
const firstName = document.querySelector('.registration-form .left-side .first-name')
const lastName = document.querySelector('.registration-form .left-side .last-name')
const userEmail = document.querySelector('.registration-form .left-side .user-email')
const userPassword = document.querySelector('.registration-form .left-side .user-password')
const retypePassword = document.querySelector('.registration-form .left-side .retype-password')
const signupButton = document.querySelector('.registration-form .left-side .signup-button')
const check = document.querySelector('.checkbox-wrapper .check')
const checkWrapper = document.querySelector('.left-side .checkbox-wrapper')
const emailError = document.querySelector('.user-email').parentElement.parentElement.parentElement.lastElementChild
const nameError = document.querySelector('.first-name').parentElement.parentElement.parentElement.lastElementChild
const passwordError = document.querySelector('.user-password').parentElement.parentElement.parentElement.lastElementChild
let validation = false;
let user;
const alert_svg = `<svg aria-hidden="true" class="stUf5b LxE1Id" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>`


//floating label
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


// signupButton handle
signupButton.addEventListener('click', (e) => {

    e.preventDefault()

    //checkname
    checkNameFieldError()

    //checkmail
    checkEmailFieldError()

    //checkpassword
    checkPasswordFieldError()

    if (validation) {
        user = {
            FirstName: firstName.value,
            LastName: lastName.value,
            email: userEmail.value,
            password: userPassword.value
        }
        console.log(user)

        localStorage.setItem('user', JSON.stringify(user))
        location.href = form.action
    }

})

// checkNameFieldError
const checkNameFieldError = () => {
    if (!firstName.value && !lastName.value) {
        nameError.innerHTML = `<div class="error-wrapper">${alert_svg}<p>Enter First and Name</p></div>`
        validation = false;
        firstName.classList.add('input-error-alert')
        firstName.nextElementSibling.classList.add('label-error-alert')
        lastName.classList.add('input-error-alert')
        lastName.nextElementSibling.classList.add('label-error-alert')

    }
    else if (!firstName.value) {
        nameError.innerHTML = `<div class="error-wrapper">${alert_svg}<p>Enter First Name</p></div>`
        validation = false;
        firstName.classList.add('input-error-alert')
        firstName.nextElementSibling.classList.add('label-error-alert')
        lastName.classList.remove('input-error-alert')
        lastName.nextElementSibling.classList.remove('label-error-alert')

    }
    else if (!lastName.value) {
        nameError.innerHTML = `<div class="error-wrapper">${alert_svg}<p>Enter Last Name</p></div>`
        validation = false;
        firstName.classList.remove('input-error-alert')
        firstName.nextElementSibling.classList.remove('label-error-alert')
        lastName.classList.add('input-error-alert')
        lastName.nextElementSibling.classList.add('label-error-alert')

    }
    else {
        nameError.innerHTML = `<div></div>`
        validation = true;
        firstName.classList.remove('input-error-alert')
        lastName.classList.remove('input-error-alert')
        firstName.nextElementSibling.classList.remove('label-error-alert')
        lastName.nextElementSibling.classList.remove('label-error-alert')
    }
}

// checkEmailFieldError

const checkEmailFieldError = () => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!userEmail.value) {
        emailError.innerHTML = `<div class="error-wrapper">${alert_svg}<p>Choose a Gmail address</p></div>`
        validation = false;
        userEmail.classList.add('input-error-alert')
        userEmail.nextElementSibling.classList.add('label-error-alert')
    }
    else if (!userEmail.value.match(mailformat)) {
        emailError.innerHTML = `<div class="error-wrapper">${alert_svg}<p>You have entered an invalid email address</p></div>`
        validation = false;
        userEmail.classList.add('input-error-alert')
        userEmail.nextElementSibling.classList.add('label-error-alert')

    }
    else {
        emailError.innerHTML = `<div></div>`
        validation = true;
        userEmail.classList.remove('input-error-alert')
        userEmail.nextElementSibling.classList.remove('label-error-alert')
    }
}

// checkPasswordFieldError
const checkPasswordFieldError = () => {
    var passwordFormat = /^[A-Za-z]\w{7,200}$/;

    if (!userPassword.value) {
        passwordError.innerHTML = `<div class="error-wrapper">${alert_svg}<p>Enter a Password</p></div>`
        validation = false;
        userPassword.classList.add('input-error-alert')
        userPassword.nextElementSibling.classList.add('label-error-alert')
    }

    else if (!userPassword.value.match(passwordFormat)) {
        passwordError.innerHTML = `<div class="error-wrapper">${alert_svg}<p>Use 8 characters or more for your password</p></div>`
        validation = false;
        userPassword.classList.add('input-error-alert')
        userPassword.nextElementSibling.classList.add('label-error-alert')
        retypePassword.classList.remove('input-error-alert')
        retypePassword.nextElementSibling.classList.remove('label-error-alert')
    }

    else if (!retypePassword.value) {
        passwordError.innerHTML = `<div class="error-wrapper">${alert_svg}<p>Confirm your pasword</p></div>`
        validation = false;
        retypePassword.classList.add('input-error-alert')
        retypePassword.nextElementSibling.classList.add('label-error-alert')
        userPassword.classList.remove('input-error-alert')
        userPassword.nextElementSibling.classList.remove('label-error-alert')
    }

    else if (userPassword.value != retypePassword.value) {
        passwordError.innerHTML = `<div class="error-wrapper">${alert_svg}<p>Those passwords didn’t match.Try again.</p></div>`
        validation = false;
        retypePassword.classList.add('input-error-alert')
        retypePassword.nextElementSibling.classList.add('label-error-alert')
        userPassword.classList.remove('input-error-alert')
        userPassword.nextElementSibling.classList.remove('label-error-alert')
    }

    else {
        passwordError.innerHTML = `<div></div>`
        validation = true;
        retypePassword.classList.remove('input-error-alert')
        userPassword.classList.remove('input-error-alert')
        userPassword.nextElementSibling.classList.remove('label-error-alert')
        retypePassword.nextElementSibling.classList.remove('label-error-alert')
    }

}



//show password
check.addEventListener('change', (e) => {
    if (check.checked) {
        userPassword.type = 'text'
        retypePassword.type = 'text'
        checkWrapper.classList.add('on-hover')
    }
    else {
        userPassword.type = 'password'
        retypePassword.type = 'password'
        checkWrapper.classList.remove('on-hover')
    }

})


