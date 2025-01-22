const check = document.querySelector(".checkbox");
const toggle = document.querySelector(".toggle");
const basic = document.querySelector(".basic-plan");
const professional = document.querySelector(".professional-plan");
const master = document.querySelector(".master-plan")

toggle.addEventListener("click", () => {
    if (check.checked == true) {
        basic.querySelector(".plan-price").innerHTML="19.99"
        professional.querySelector(".plan-price").innerHTML="24.99"
        master.querySelector(".plan-price").innerHTML="39.99"
    }
    else {
        basic.querySelector(".plan-price").innerHTML="199.99"
        professional.querySelector(".plan-price").innerHTML="249.99"
        master.querySelector(".plan-price").innerHTML="399.99"
    }
})




