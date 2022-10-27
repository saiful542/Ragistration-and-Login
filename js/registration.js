const form = document.forms
console.log(form)


const check = document.querySelector('.check')
console.log(check)

check.addEventListener('change', (e) => {
    const pass = document.querySelector('.user-password')
    const v = pass.value
    if (check.checked) {

        pass.type = 'text'
        console.log(pass.type)


    }

    else {
        console.log(v)
        pass.type = 'password'
        document.querySelector('.user-password').value = v
    }


})