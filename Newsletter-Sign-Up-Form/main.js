const email = document.querySelector(".email");
const submit = document.querySelector(".submit");
const error = document.querySelector(".error");
const success_state = document.querySelector(".success-state");
const content = document.querySelector(".main-content")
const dismiss = document.querySelector(".dismiss")


email.addEventListener("input", () => {
    errorHandler(email, error)
})

submit.addEventListener("click", () => {
    errorHandler(email, error)
    checkValid(email, error)
})

dismiss.addEventListener("click", () => {
    content.style.display = "flex"
    success_state.style.display = "none"
    email.value=null
    if (window.innerWidth < 767) {
        document.querySelector(".img-1").style.display ="block";
        document.querySelector(".img-2").style.display ="none";
    }
    if (window.innerWidth > 767) {
        document.querySelector(".img-2").style.display ="block";
        document.querySelector(".img-1").style.display ="none";
    }

    window.addEventListener("resize",()=>{
        if (window.innerWidth < 767) {
            document.querySelector(".img-1").style.display ="block";
            document.querySelector(".img-2").style.display ="none";
        }
        if (window.innerWidth > 767) {
            document.querySelector(".img-2").style.display ="block";
            document.querySelector(".img-1").style.display ="none";
        }
    })
})




function setError(input, errorinput, mesasge) {
    input.classList.add("error-input");
    errorinput.classList.add("error-message");
    errorinput.innerHTML = mesasge;
}


function errorHandler(emailinput, errormesasge) {
    if (emailinput.value !== "") {
        emailinput.classList.remove("error-input")
        errormesasge.classList.remove("error-message")
    }

    else {
        setError(emailinput, errormesasge, "input is empty")
    }
}

function checkValid(emailinput, errormesasge) {
    if (emailinput.value !== "" && emailinput.checkValidity()) {
        content.style.display = "none"
        success_state.style.display = "flex"
        document.querySelector(".img-1").style.display="none"
        document.querySelector(".img-2").style.display="none"
        document.querySelector(".confirmation").innerHTML = `A confirmation eamil has been sent to ${emailinput.value}.Please open it and click the button inside to confirm your subscription`
    }
    else {
        setError(emailinput, errormesasge, "Valid email required")
    }
}

