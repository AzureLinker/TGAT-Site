const forms = document.querySelector(".forms");
const pwShowHide = document.querySelectorAll(".eye-icon");
const links = document.querySelectorAll(".link");
const loginForm = document.querySelector(".loginForm");
const form = document.querySelector(".signup");
const loginField = form.querySelector(".login-field");
const loginInput = loginField.querySelector(".login")
const emailField = form.querySelector(".email-field");
const emailInput = emailField.querySelector(".email");
const passField = form.querySelector(".password-field");
const passInput = passField.querySelector(".password");
const cPassField = form.querySelector(".cPassword-field");
const cPassInput = cPassField.querySelector(".cPassword");
const lPass = loginForm.querySelectorAll(".lPassword");
const lLogin = loginForm.querySelector(".lLogin");

// * Login Validation
function checkLogin(){
    const loginPattern = /^[A-Za-z0-9_-]{2,}$/ // буквы, цифры, точки и подчёркивание
    if(!loginInput.value.match(loginPattern)){
        return loginField.classList.add("invalid");
    }
    loginField.classList.remove("invalid");
}

// * Email Validation (Потом надо соединить с формами)
function checkEmail(){
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if(!emailInput.value.match(pattern)){
        return emailField.classList.add("invalid");
    }
    emailField.classList.remove("invalid");
}
// * Password Validation
function createPass(){
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(!passInput.value.match(passPattern)){
        return passField.classList.add("invalid");
    }
    passField.classList.remove("invalid");
}
// * Confirm Password
function confirmPass(){
    if(passInput.value !== cPassInput.value || cPassInput.value === ""){
        return cPassField.classList.add("invalid");
    }
    cPassField.classList.remove("invalid");
}
// * Enable Submit only on rule accept
function enableForm(){
    const rules = document.querySelector("#ruleAcceptCheck");
    const button = document.querySelector("#registerButton");

    if(rules.checked){
        return button.disabled = false;
    }
    button.disabled = true;
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkLogin();
    checkEmail();
    createPass();
    confirmPass();

    loginInput.addEventListener("keyup", checkLogin);
    emailInput.addEventListener("keyup", checkEmail);
    passInput.addEventListener("keyup", createPass);
    passInput.addEventListener("keyup", confirmPass);
    cPassInput.addEventListener("keyup", confirmPass);
});
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

})
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.querySelector("input");
        if(pwFields.type === "password"){
            pwFields.type = "text";
            eyeIcon.classList.replace("bx-hide", "bx-show");
            return;
        }
        pwFields.type = "password";
        eyeIcon.classList.replace("bx-show", "bx-hide");
    })
});

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        forms.classList.toggle("show-signup");
    })
});