// global variables
const inputs = document.querySelectorAll(".input");
const error = document.querySelectorAll(".error");
const label = document.querySelectorAll(".label");
const submit = document.querySelector(".arrow-svg");

// errors to display
const errors = {
    error0: "This field is required",
    error1: "Must be a valid day",
    error2: "Must be a valid month",
    error3: "Must be a valid year",
    error4:"Not a leap year",
}


// inputs[0]=day_input, inputs[1]=month_input, inputs[2]=year_input

// below is the function for handling error before submission

errorHandler = (input, error, label, index) => {

    // function takes targeted input fields and errors, labels with their index as its parameter

    let value = input.value.trim();
    this.error = error[index];
    this.label = label[index];

    if (value !== "") {
        input.style.border = "";
        this.label.style.color = "";
        this.error.style.visibility = "hidden";

        if (index == 0) {
            if (input.value > 31 || input.value < 1) {
                input.style.border = "1px solid #ff5757";
                this.label.style.color = "#ff5757";
                this.error.style.visibility = "visible";
                this.error.innerHTML = errors.error1;
            }

            else if (input.value == 31 && (inputs[1].value == 2 || inputs[1].value == 4 || inputs[1].value == 6 || inputs[1].value == 9 || inputs[1].value == 11)) {
                input.style.border = "1px solid #ff5757";
                this.label.style.color = "#ff5757";
                this.error.style.visibility = "visible";
                this.error.innerHTML = errors.error1;
            }

            else if (input.value == 30 && inputs[1].value == 2) {
                input.style.border = "1px solid #ff5757";
                this.label.style.color = "#ff5757";
                this.error.style.visibility = "visible";
                this.error.innerHTML = errors.error1;
            }

            else if (input.value == 29 && (inputs[1].value == 2 && inputs[2].value % 4 !== 0)) {
                input.style.border = "1px solid #ff5757";
                this.label.style.color = "#ff5757";
                this.error.style.visibility = "visible";
                this.error.innerHTML = errors.error1;
                inputs[2].style.border = "1px solid #ff5757";
                label[2].style.color = "#ff5757";
                error[2].style.visibility = "visible";
                error[2].innerHTML = errors.error4;
            }

            else if(input.value < 29){
                inputs[2].style.border = "";
                label[2].style.color = "";
                error[2].style.visibility = "hidden";
            }

            else if ((input.value > new Date().getDate()) && (inputs[1].value == new Date().getMonth() + 1) && (inputs[2].value == new Date().getFullYear())) {
                input.style.border = "1px solid #ff5757";
                this.label.style.color = "#ff5757";
                this.error.style.visibility = "visible";
                this.error.innerHTML = errors.error1;
            }
        }

        if (index == 1) {
            if (input.value > 12 || input.value < 1) {
                input.style.border = "1px solid #ff5757";
                this.label.style.color = "#ff5757";
                this.error.style.visibility = "visible";
                this.error.innerHTML = errors.error2;

            }

            else if (inputs[0].value == 31 && (input.value == 2 || input.value == 4 || input.value == 6 || input.value == 9 || input.value == 11)) {
                inputs[0].style.border = "1px solid #ff5757";
                label[0].style.color = "#ff5757";
                error[0].style.visibility = "visible";
                error[0].innerHTML = errors.error1;
            }

            else if (inputs[0].value == 30 && input.value == 2) {
                inputs[0].style.border = "1px solid #ff5757";
                label[0].style.color = "#ff5757";
                error[0].style.visibility = "visible";
                error[0].innerHTML = errors.error1;
            }

            else if (inputs[0].value == 29 && (input.value == 2 && inputs[2].value % 4 !== 0)) {
                inputs[0].style.border = "1px solid #ff5757";
                label[0].style.color = "#ff5757";
                error[0].style.visibility = "visible";
                error[0].innerHTML = errors.error1;
                inputs[2].style.border = "1px solid #ff5757";
                label[2].style.color = "#ff5757";
                error[2].style.visibility = "visible";
                error[2].innerHTML = errors.error4;
                
            }

            else if(input.value!==2){
                inputs[2].style.border = "";
                label[2].style.color = "";
                error[2].style.visibility = "hidden";
                inputs[0].style.border = "";
                label[0].style.color = "";
                error[0].style.visibility = "hidden";
            }

            else if (inputs[0].value > 31) {
                inputs[0].style.border = "1px solid #ff5757";
                label[0].style.color = "#ff5757";
                error[0].style.visibility = "visible";
                error[0].innerHTML = errors.error1;
            }

            else if ((inputs[2].value == new Date().getFullYear()) && (input.value > (new Date().getMonth() + 1))) {
                input.style.border = "1px solid #ff5757";
                this.label.style.color = "#ff5757";
                this.error.style.visibility = "visible";
                this.error.innerHTML = errors.error2;
            }

            else if ((inputs[0].value > new Date().getDate()) && (input.value == new Date().getMonth() + 1) && (inputs[2].value == new Date().getFullYear())) {
                inputs[0].style.border = "1px solid #ff5757";
                label[0].style.color = "#ff5757";
                error[0].style.visibility = "visible";
                error[0].innerHTML = errors.error1;
            }

            else {
                if (inputs[0].value !== "") {
                    inputs[0].style.border = "";
                    label[0].style.color = "";
                    error[0].style.visibility = "hidden";
                }

            }

        }

        if (index == 2) {

            if (input.value > new Date().getFullYear()) {
                input.style.border = "1px solid #ff5757";
                this.label.style.color = "#ff5757";
                this.error.style.visibility = "visible";
                this.error.innerHTML = errors.error3;
            }


            else if (inputs[0].value == 29 && (inputs[1].value == 2 && input.value % 4 !== 0)) {
                inputs[0].style.border = "1px solid #ff5757";
                label[0].style.color = "#ff5757";
                error[0].style.visibility = "visible";
                error[0].innerHTML = errors.error1;
                input.style.border = "1px solid #ff5757";
                this.label.style.color = "#ff5757";
                this.error.style.visibility = "visible";
                this.error.innerHTML = errors.error4;
            }

            else if (inputs[0].value > 31) {
                inputs[0].style.border = "1px solid #ff5757";
                label[0].style.color = "#ff5757";
                error[0].style.visibility = "visible";
                error[0].innerHTML = errors.error1;
            }

            else if (inputs[0].value == 30 && inputs[1].value == 2) {
                inputs[0].style.border = "1px solid #ff5757";
                label[0].style.color = "#ff5757";
                error[0].style.visibility = "visible";
                error[0].innerHTML = errors.error1;
            }

            else if (inputs[0].value == 31 && (inputs[1].value == 2 || inputs[1].value == 4 || inputs[1].value == 6 || inputs[1].value == 9 || inputs[1].value == 11)) {
                inputs[0].style.border = "1px solid #ff5757";
                label[0].style.color = "#ff5757";
                error[0].style.visibility = "visible";
                error[0].innerHTML = errors.error1;
            }

            else if ((input.value == new Date().getFullYear()) && (inputs[1].value > (new Date().getMonth() + 1))) {
                inputs[1].style.border = "1px solid #ff5757";
                label[1].style.color = "#ff5757";
                error[1].style.visibility = "visible";
                error[1].innerHTML = errors.error2;
            }

            else if ((inputs[0].value > new Date().getDate()) && (inputs[1].value == new Date().getMonth() + 1) && (input.value == new Date().getFullYear())) {
                inputs[0].style.border = "1px solid #ff5757";
                label[0].style.color = "#ff5757";
                error[0].style.visibility = "visible";
                error[0].innerHTML = errors.error1;
            }


            else if ((input.value < new Date().getFullYear()) && (inputs[1].value !== "") && (inputs[0].value !== "")) {
                inputs[0].style.border = "";
                label[0].style.color = "";
                error[0].style.visibility = "hidden";
                inputs[1].style.border = "";
                label[1].style.color = "";
                error[1].style.visibility = "hidden";

            }

            else {
                if (inputs[0].value !== "") {
                    inputs[0].style.border = "";
                    label[0].style.color = "";
                    error[0].style.visibility = "hidden";
                }
            }
        }
    }


    else {
        input.style.border = "1px solid #ff5757";
        this.label.style.color = "#ff5757";
        this.error.style.visibility = "visible";
        this.error.innerHTML = errors.error0;
    }
}

// this function works when the parent div of arrow svg clicked and show the current day age of the user 

function result(input, index) {

    // takes targeted input field with their index as its parameter

    let value = input.value.trim();
    if (value !== "") {

        if (index == 0) {

            const day_of_birth = new Date().getDate() - input.value

//__________________________conditions below apply when this input field has an error________________________________

            if (input.value > 31 || input.value < 1) {

                document.querySelector(".day").innerHTML = "--";
            }

            else if (input.value == 31 && (inputs[1].value == 2 || inputs[1].value == 4 || inputs[1].value == 6 || inputs[1].value == 9 || inputs[1].value == 11)) {

                document.querySelector(".day").innerHTML = "--";

            }

            else if (input.value == 30 && inputs[1].value == 2) {

                document.querySelector(".day").innerHTML = "--";

            }

            else if (input.value == 29 && (inputs[1].value == 2 && inputs[2].value % 4 !== 0)) {

                document.querySelector(".day").innerHTML = "--";

            }

            else if (inputs[1].value == "" || inputs[2].value == "") {

                document.querySelector(".day").innerHTML = "--";

            }

            else if ((inputs[2].value == new Date().getFullYear()) && (inputs[1].value > (new Date().getMonth() + 1))) {

                document.querySelector(".day").innerHTML = "--";

            }

            else if ((input.value > new Date().getDate()) && (inputs[1].value == new Date().getMonth() + 1) && (inputs[2].value == new Date().getFullYear())) {

                document.querySelector(".day").innerHTML = "--";

            }

//___________________________conditions below apply when this input field has no error_______________________________

            else if (day_of_birth < 0) {

                document.querySelector(".day").innerHTML = `${day_of_birth + 31}`;

            }

            else if (day_of_birth >= 0) {

                document.querySelector(".day").innerHTML = `${day_of_birth}`;

            }
        }

        if (index == 1) {
            const current_month = new Date().getMonth() + 1;

//__________________________conditions below apply when this input field has an error________________________________

            if (input.value > 12 || input.value < 1) {

                document.querySelector(".day").innerHTML = "--";
                document.querySelector(".month").innerHTML = "--";

            }

            else if (inputs[0].value == "" || inputs[2].value == "") {

                document.querySelector(".month").innerHTML = "--";

            }

            else {


                if (inputs[0].value > 31 || inputs[0].value < 1) {
                    document.querySelector(".month").innerHTML = "--";
                }

                else if (inputs[0].value == 31 && (input.value == 2 || input.value == 4 || input.value == 6 || input.value == 9 || input.value == 11)) {
                    document.querySelector(".month").innerHTML = "--";
                }

                else if (inputs[0].value == 30 && input.value == 2) {
                    document.querySelector(".month").innerHTML = "--";
                }

                else if (inputs[0].value == 29 && (input.value == 2 && inputs[2].value % 4 !== 0)) {
                    document.querySelector(".month").innerHTML = "--";
                }

                else if ((inputs[2].value == new Date().getFullYear()) && (input.value > (new Date().getMonth() + 1))) {
                    document.querySelector(".month").innerHTML = "--";
                }

                else if ((inputs[0].value > new Date().getDate()) && (input.value == new Date().getMonth() + 1) && (inputs[2].value == new Date().getFullYear())) {
                    document.querySelector(".month").innerHTML = "--";
                }

//___________________________conditions below apply when this input field has no error_______________________________

                else if (current_month < input.value) {
                    let month_of_birth = current_month - input.value;
                    let corrected_month_of_birth = month_of_birth + 12;

                    if (new Date().getDate() < inputs[0].value) {
                        document.querySelector(".month").innerHTML = `${corrected_month_of_birth - 1}`;
                    }

                    else if (new Date().getDate() >= inputs[0].value) {
                        document.querySelector(".month").innerHTML = `${corrected_month_of_birth}`;
                    }
                }


                else if (current_month == input.value) {
                    let month_of_birth = current_month - input.value;
                    let corrected_month_of_birth = month_of_birth + 12;
                    if (new Date().getDate() < inputs[0].value) {
                        document.querySelector(".month").innerHTML = `${corrected_month_of_birth - 1}`;
                    }

                    else if (new Date().getDate() >= inputs[0].value) {
                        document.querySelector(".month").innerHTML = `${month_of_birth}`;
                    }
                }

                else if (current_month > input.value) {
                    let month_of_birth = current_month - input.value;

                    if (new Date().getDate() < inputs[0].value) {
                        document.querySelector(".month").innerHTML = `${month_of_birth - 1}`;
                    }

                    else if (new Date().getDate() >= inputs[0].value) {
                        document.querySelector(".month").innerHTML = `${month_of_birth}`;
                    }
                }

            }
        }

        if (index == 2) {
            const year_of_birth = new Date().getFullYear() - input.value;
            const current_month = new Date().getMonth() + 1;

//__________________________conditions below apply when this input field has an error________________________________

            if (input.value > new Date().getFullYear()) {

                document.querySelector(".day").innerHTML = "--";
                document.querySelector(".month").innerHTML = "--";
                document.querySelector(".year").innerHTML = "--";

            }

            else if (inputs[0].value == "" || inputs[1].value == "") {

                document.querySelector(".year").innerHTML = "--";

            }

            else {


                if (inputs[0].value > 31 || inputs[0].value < 1) {
                    document.querySelector(".year").innerHTML = "--";
                }

                else if (inputs[0].value == 31 && (inputs[1].value == 2 || inputs[1].value == 4 || inputs[1].value == 6 || inputs[1].value == 9 || inputs[1].value == 11)) {
                    document.querySelector(".year").innerHTML = "--";
                }

                else if (inputs[0].value == 30 && inputs[1].value == 2) {
                    document.querySelector(".year").innerHTML = "--";
                }

                else if (inputs[0].value == 29 && (inputs[1].value == 2 && input.value % 4 !== 0)) {
                    document.querySelector(".year").innerHTML = "--";
                }

                else if (inputs[1].value > 12 || inputs[1].value < 1) {
                    document.querySelector(".year").innerHTML = "--";
                }

                else if ((input.value == new Date().getFullYear()) && (inputs[1].value > (new Date().getMonth() + 1))) {
                    document.querySelector(".year").innerHTML = "--";
                }

                else if ((inputs[0].value > new Date().getDate()) && (inputs[1].value == new Date().getMonth() + 1) && (input.value == new Date().getFullYear())) {
                    document.querySelector(".year").innerHTML = "--";
                }

//___________________________conditions below apply when this input field has no error_______________________________

                else if (current_month < inputs[1].value) {
                    document.querySelector(".year").innerHTML = `${year_of_birth - 1}`;
                }

                else if ((current_month == inputs[1].value) && (new Date().getDate() < inputs[0].value)) {
                    document.querySelector(".year").innerHTML = `${year_of_birth - 1}`;
                }

                else if ((current_month == inputs[1].value) && (new Date().getDate() == inputs[0].value)) {
                    document.querySelector(".year").innerHTML = `${year_of_birth}`;
                }

                else if ((current_month == inputs[1].value) && (new Date().getDate() > inputs[0].value)) {
                    document.querySelector(".year").innerHTML = `${year_of_birth}`;
                }

                else if (current_month > inputs[1].value) {
                    document.querySelector(".year").innerHTML = `${year_of_birth}`;
                }

            }
        }
    }
}

inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        input.value = input.value.replace(/[-+]/g, "");
        errorHandler(input, error, label, index);
    })
    submit.addEventListener("click", ()=> {
        errorHandler(input, error, label, index);
        result(input, index);
    })
})



























