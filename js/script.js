var signUpName = document.getElementById("signUpName")
var signUpEmail = document.getElementById("signUpEmail")
var signUpPassword = document.getElementById("signUpPassword")
var signinEmail = document.getElementById("signinEmail")
var signinPassword = document.getElementById("signinPassword")
var localUsers = JSON.parse(localStorage.getItem("users"))
var nameAlert = document.getElementById("nameAlert")
var users = []


var regex = {
    name: {
        // value: /^[a-z0-9]{3,15}$/,
        value:/^[a-z0-9_-]{3,15}$/,
        status: false
    },
    email: {
        value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        status: false,
    },
    pass: {
        value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        status: false
    }
}

function signUp() {
    var user = {
        signUp_N: signUpName.value,
        signUp_E: signUpEmail.value,
        signUp_P: signUpPassword.value
    }
    users.push(user);
    updateLocalStorage();
}


function updateLocalStorage() {
    localStorage.setItem("users", JSON.stringify(users))
}

function login() {
    for (var i = 0; i < localUsers.length; i++) {
        if (signinEmail.value == localUsers[i].signUp_E && signinPassword.value == localUsers[i].signUp_P) {
            localStorage.setItem("username",localUsers[i].signUp_N)
            window.location.href = "home.html";
        }
        else {
            document.getElementById("incorrect").classList.remove("d-none")
        }
    }
}


function display(){
    document.getElementById("username").innerHTML = `<h1>welcome ${localStorage.getItem("username")}</h1>`
}

function ValidateName() {
    if (regex.name.value.test(signUpName.value)) {
        localStorage.setItem("name", signUpName.value)
        regex.name.status = true;
        signUpName.classList.remove("is-invalid")
        signUpName.classList.add("is-valid")
        return true
    } else {
        regex.name.status = false;
        signUpName.classList.remove("is-valid")
        signUpName.classList.add("is-invalid")
        nameAlert.classList.remove("d-none")
        return false
    }
}

function ValidateEmail() {
    if (regex.email.value.test(signUpEmail.value)) {
        regex.email.status = true;
        signUpEmail.classList.remove("is-invalid")
        signUpEmail.classList.add("is-valid")
        return true
    } else {
        regex.email.status = false;
        signUpEmail.classList.remove("is-valid")
        signUpEmail.classList.add("is-invalid")
        emailAlert.classList.remove("d-none")
        return false

    }
}

function ValidatePass() {
    if (regex.pass.value.test(signUpPassword.value)) {
        regex.pass.status = true;
        signUpPassword.classList.add("is-valid")
        signUpPassword.classList.remove("is-invalid")
        return true
    } else {
        regex.pass.status = false;
        signUpPassword.classList.remove("is-valid")
        signUpPassword.classList.add("is-invalid")
        passwordAlert.classList.remove("d-none")
        return false
    }
}

