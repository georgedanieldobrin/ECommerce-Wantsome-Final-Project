if (localStorage.getItem('isLogged') == 'true') {
    window.location.replace("../Main_Page/index.html");
}

function printError(id, msg) {
    document.getElementById(id).innerHTML = msg;
}

function validateForm() {

    let name = document.form.name.value;
    let lastName = document.form.lastName.value;
    let email = document.form.email.value;
    let password = document.form.password1.value;
    let confirmPassword = document.form.password2.value;
    let nameErr = lastNameErr = emailErr = passwordErr = confirmPasswordErr = false;
    let success = document.querySelector('p');

    let user = {
        name: name,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    };


    if (name == "") {
        printError("nameErr", "Please enter your First Name");
        const elem = document.getElementById("name");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        const regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false || name.length < 2) {
            printError("nameErr", "Please enter a valid First Name");
            const elem = document.getElementById("name");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("nameErr", "");
            nameErr = true;
            const elem = document.getElementById("name");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

        }
    }

    if (lastName == "") {
        printError("lastNameErr", "Please enter your Last Name");
        const elem = document.getElementById("lastName");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        const regex = /^[a-zA-Z\s]+$/;
        if (regex.test(lastName) === false || lastName.length < 2) {
            printError("lastNameErr", "Please enter a valid Last Name");
            const elem = document.getElementById("lastName");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("lastNameErr", "");
            lastNameErr = true;
            const elem = document.getElementById("lastName");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

        }
    }

    if (email == "") {
        printError("emailErr", "Please enter your Email Address");
        const elem = document.getElementById("email");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        if (email.length < 12) {
            printError("emailErr", "Please enter a valid Email Address");
            const elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("emailErr", "");
            emailErr = true;
            const elem = document.getElementById("email");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

        }
    }


    if (password == "") {
        printError("passwordErr", "Please enter your Password");
        const elem = document.getElementById("password1");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (regex.test(password) === false || password.length < 6) {
            printError("passwordErr", "Password must contain 6 to 20 characters, at least one numeric digit, one uppercase and one lowercase letter");
            const elem = document.getElementById("password1");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("passwordErr", "");
            passwordErr = true;
            const elem = document.getElementById("password1");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");

        }
    }


    if (confirmPassword == "") {
        printError("confirmPasswordErr", "Please Confirm your Password");
        const elem = document.getElementById("password2");
        elem.classList.add("input-2");
        elem.classList.remove("input-1");
    } else {
        if (password !== confirmPassword) {
            printError("confirmPasswordErr", "Password and Confirm Password do not match");
            const elem = document.getElementById("password2");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        } else {
            printError("confirmPasswordErr", "");
            const elem = document.getElementById("password2");
            elem.classList.add("input-1");
            elem.classList.remove("input-2");
            confirmPasswordErr = true;
        }
    }


    if ((nameErr && lastNameErr && emailErr && passwordErr && confirmPasswordErr) == true) {
        const json = JSON.stringify(user);
        localStorage.setItem(email, json);
        localStorage.setItem(name, true);
        
        success.style.visibility = "visible";
        document.getElementById("submit-button").disabled = true;

        let input = document.querySelectorAll('input');
        for (let inp of input) {
            inp.disabled = true;
        }

        setTimeout(function () {
            window.location.replace("../Sign_In/index.html");
        }, 5000)
    }
    return false;
}


// password

const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

const togglePassword = document.querySelector('#togglePassword1');

togglePassword.addEventListener('click', function (e) {
    const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
    password1.setAttribute('type', type);
    this.classList.toggle('fa-eye');
});


togglePassword2.addEventListener('click', function (e) {
    const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
    password2.setAttribute('type', type);
    this.classList.toggle('fa-eye');
});


// localStorage