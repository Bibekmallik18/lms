const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg")

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    /* check if both username and password are correct */
    if(username === "user" && password === "pass") {
        alert("You have been successfully logged in.");
        location.reload();
    }
    else {
        loginErrorMsg.style.opacity = 1;
    }

}
)