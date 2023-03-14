const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const nameError = document.querySelector("#name + span.error");
const lNameError = document.querySelector("#lastName + span.error");
const emailError = document.querySelector("#email + span.error");
const passError = document.querySelector("#passW + span.error");
const confError = document.querySelector("#cPassW + span.error");


inputs.forEach(input => {
    input.addEventListener("input", (event)=>{
        if(input.validity.valid){
            nameError.textContent = "";
            nameError.className = "error";

            lNameError.textContent = "";
            lNameError.className = "error";

            emailError.textContent = "";
            emailError.className = "error";

            passError.textContent = "";
            passError.className = "error";

            confError.textContent = "";
            confError.className = "error";

            input.style.borderColor= "green";
        }
        else{
            showError(input);
        }
    });
});


function showError(input){
    let error;
    let message;
    let password;
    let confPsw;
    switch (input.name) {
        case "lName":
            error = lNameError;
            message = "a last name."
            break;
        case "email":
            error = emailError;
            message = "an email address."
            break;
        case "password":
            error = passError;
            message = "a password."
            password = input.value;
            break;
        case "confPassW":
            error = confError;
            message = "a confirmed password."
            confPsw = input.value;
            break;
        default:
            error = nameError;
            message = "a name."
            break;
    }
    
    if(input.validity.valueMissing){
        error.textContent = `You need to enter ${message}`;
    }
    else if (input.validity.typeMismatch){
        error.textContent = `Entered value needs to be ${message}`;
    }

    if(confPsw !== password){
        passError.textContent = "* Passwords do not match.";
    }
    error.className = "error active";
    input.style.borderColor= "red";
}