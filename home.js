var signUpForm = document.querySelector(".email-sign-up");
var input = document.querySelector("input");
var signUpBtn = document.querySelector("#sign-up");
var footer = document.querySelector("footer");

function emailSubmitHandler(){
    var confirmationMsg = document.createElement("p");
    confirmationMsg.textContent = "Thank you for signing up! Notifications will be sent to " + input.value;
    signUpForm.remove();
    footer.appendChild(confirmationMsg);
}

signUpBtn.addEventListener("click", emailSubmitHandler);