const inputs = document.querySelectorAll(".input");
const term = document.querySelector(".term");
const amount = document.querySelector(".amount");
const interest = document.querySelector(".interest")
const type = document.querySelectorAll(".type")
const calculate = document.querySelector(".button");
const repayment = document.querySelector(".repayment");
const interest_only = document.querySelector(".interest-only");
const monthly_repayments = document.querySelector(".monthly-repayments");
const total_repayments = document.querySelector(".total-repayments");
const error_message = document.querySelectorAll(".error-message");
const clear = document.querySelector(".clear")
inputs.forEach(element => {
    element.addEventListener("input", () => {
        element.value = element.value.replace(/[-+.]/g, "");

        if (element.value !== "") {
            element.classList.remove("error-border");
        }
        else {
            element.classList.add("error-border");
        }
    })

    element.addEventListener("focusin", () => {
        if (element == amount) {
            document.querySelector(".pound").classList.add("icon-active");
            error_message[0].classList.remove("visibility")
        }

        else if (element == term) {
            document.querySelector(".years").classList.add("icon-active");
            error_message[1].classList.remove("visibility")
        }
    })

    element.addEventListener("focusout", () => {
        if (element == amount) {
            document.querySelector(".pound").classList.remove("icon-active");
            if (amount.value == "") {
                error_message[0].classList.add("visibility")
                document.querySelector(".pound").classList.add("error-icon");
                element.classList.add("error-border");
            }
        }
        else if (element == term) {
            document.querySelector(".years").classList.remove("icon-active");
            if (term.value == "") {
                error_message[1].classList.add("visibility")
                document.querySelector(".years").classList.add("error-icon");
                element.classList.add("error-border");
            }
        }
    })



    amount.addEventListener("input", () => {
        if (amount.value !== "") {
            document.querySelector(".pound").classList.remove("error-icon");
        }

        else {
            document.querySelector(".pound").classList.add("error-icon");

        }
    })

    term.addEventListener("input", () => {
        if (term.value !== "") {
            document.querySelector(".years").classList.remove("error-icon");
            error_message[1].classList.remove("visibility")
        }

        else {
            document.querySelector(".years").classList.add("error-icon");
        }
    })

    interest.addEventListener("input", () => {
        interest.value = interest.value.replace(/[-+]/g, "");
        if (interest.value !== "") {
            interest.classList.remove("error-border");
            document.querySelector(".percent").classList.remove("error-icon");
        }

        else {
            interest.classList.add("error-border");
            document.querySelector(".percent").classList.add("error-icon");
        }
    })

    interest.addEventListener("focusin", () => {
        document.querySelector(".percent").classList.add("icon-active");
        error_message[2].classList.remove("visibility")
    })

    interest.addEventListener("focusout", () => {
        document.querySelector(".percent").classList.remove("icon-active");
        if (interest.value == "") {
            error_message[2].classList.add("visibility")
            document.querySelector(".percent").classList.add("error-icon");
            interest.classList.add("error-border");
        }
    })

    type.forEach(element => {
        element.addEventListener("click", () => {
            type.forEach(radio => { radio.classList.remove("radio-color") })
            element.classList.add("radio-color")
        })
    });

    document.querySelectorAll(".custom-radio").forEach(element => {
        element.addEventListener("click", () => {
            if (element.checked) {
                error_message[3].classList.remove("visibility")
            }

            else {
                error_message[3].classList.add("visibility")
            }
        })
    });
});


function result(amount, term, interest) {
    let mortgage_term = term * 12;
    let rate = (interest / 12) / 100;
    let step_1 = (1 + rate) ** mortgage_term;
    let step_2 = (rate * step_1) / (step_1 - 1);
    let step_3 = (amount * step_2).toFixed(2);
    let total = (mortgage_term * step_3).toFixed(2);
    let total_interest = (total - amount).toFixed(2);
    if (term == 0 || interest == 0) {
        if (repayment.checked) {
            monthly_repayments.innerHTML = `&#163;0.00`
            total_repayments.innerHTML = `&#163;0.00`
            document.querySelector(".interest-repayment").classList.add("display-none");
            document.querySelector(".overall-repayments").classList.remove("display-none");
        }

        else {
            document.querySelector(".interest-repay").innerHTML = `&#163;0.00`
            document.querySelector(".interest-repayment").classList.remove("display-none");
            document.querySelector(".overall-repayments").classList.add("display-none");
        }
    }


    else {
        if (repayment.checked) {
            monthly_repayments.innerHTML = `&#163;${step_3}`
            total_repayments.innerHTML = `&#163;${total}`
            document.querySelector(".interest-repayment").classList.add("display-none");
            document.querySelector(".overall-repayments").classList.remove("display-none");
        }
        else {
            document.querySelector(".interest-repay").innerHTML = `&#163;${total_interest}`
            document.querySelector(".interest-repayment").classList.remove("display-none");
            document.querySelector(".overall-repayments").classList.add("display-none");
        }
    }
}


calculate.addEventListener("click", () => {
    if (amount.value !== "" && term.value !== "" && interest.value !== "" && (repayment.checked || interest_only.checked)) {
        result(amount.value.trim(), term.value.trim(), interest.value.trim())
        document.querySelector(".result-empty").style.display = "none";
        document.querySelector(".result").style.display = "block";
    }
    error_message.forEach(element => {

        if (amount.value !== "") {
            amount.classList.remove("error-border");
            document.querySelector(".pound").classList.remove("error-icon");
            error_message[0].classList.remove("visibility")
        }

        else {
            amount.classList.add("error-border");
            document.querySelector(".pound").classList.add("error-icon");
            error_message[0].classList.add("visibility")
        }

        if (term.value !== "") {
            term.classList.remove("error-border");
            document.querySelector(".years").classList.remove("error-icon");
            error_message[1].classList.remove("visibility")
        }

        else {
            term.classList.add("error-border");
            document.querySelector(".years").classList.add("error-icon");
            error_message[1].classList.add("visibility")
        }

        if (interest.value !== "") {
            interest.classList.remove("error-border");
            document.querySelector(".percent").classList.remove("error-icon");
            error_message[2].classList.remove("visibility")
        }

        else {
            interest.classList.add("error-border");
            document.querySelector(".percent").classList.add("error-icon");
            error_message[2].classList.add("visibility")
        }

        if (repayment.checked || interest_only.checked) {
            error_message[3].classList.remove("visibility")
        }

        else {
            error_message[3].classList.add("visibility")
        }
    });
})

clear.addEventListener("click",()=>{
    amount.value=""
    term.value=""
    interest.value=""
    repayment.checked=false
    interest_only.checked=false
    type.forEach(radio => { radio.classList.remove("radio-color") })
    document.querySelector(".result-empty").style.display = "block";
    document.querySelector(".result").style.display = "none";
})







