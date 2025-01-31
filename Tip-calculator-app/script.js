const input = document.querySelectorAll(".input");
const buttons = document.querySelectorAll(".button");
const bill = document.querySelector(".bill-input");
const people = document.querySelector(".people-input");
const custom = document.querySelector(".custom-tip");
const tip_amount = document.querySelector(".tip-amount");
const total_amount = document.querySelector(".total-amount")
const reset = document.querySelector(".reset")

function result(bill, customtip, people) {
    let tip_per_person = parseFloat((((bill * customtip) / 100) / people).toFixed(2));
    tip_amount.innerHTML = `$${tip_per_person}`;
    let total_per_person = (parseFloat(bill / people) + tip_per_person).toFixed(2);
    total_amount.innerHTML = `$${total_per_person}`;
    if ((people==0) || (people==0 && customtip==0)) {
        tip_amount.innerHTML = `$0.00`;
        total_amount.innerHTML = `$0.00`;
    }
    document.querySelector(".reset").classList.add("opacity")
}


people.addEventListener("input",()=>{
    if(people.value.trim()==0){
        document.querySelector(".people-input").classList.add("error");
        document.querySelector(".error").classList.add("visibility");

    }
    else{
        document.querySelector(".people-input").classList.remove("error");
        document.querySelector(".error").classList.remove("visibility");
    }
})


input.forEach((element) => {
    element.addEventListener("input", () => {
        element.value = element.value.replace(/[+-]/g, " ");
        if (bill.value.trim() !== "" && people.value.trim() !== "" && custom.value.trim() !== "") {
            result(bill.value.trim(), custom.value.trim(), people.value.trim())
        }
    });
})


buttons.forEach(element => {
    element.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("selected"));
        element.classList.add("selected");
        custom.value = ""

        custom.addEventListener("input", () => {
            if (custom.value.trim() !== "") {
                element.classList.remove("selected");
            }
        })

        tip=element.textContent.replace("%","")
        
        
        if (bill.value.trim() !== "" && people.value.trim() !== "") {
            result(bill.value.trim(),tip, people.value.trim())
        }

        input.forEach((element) => {
            element.addEventListener("input", () => {
                element.value = element.value.replace(/[+-]/g, " ");
                if (bill.value.trim() !== "" && people.value.trim() !== "") {
                    result(bill.value.trim(),tip, people.value.trim())
                    if (custom.value.trim() !== "") {
                        result(bill.value.trim(), custom.value.trim(), people.value.trim())
                    }
                }
            });
        })
        
        reset.addEventListener("click",()=>{
            element.classList.remove("selected");
            tip = 0;
        })
    })
})


reset.addEventListener("click",()=>{
    document.querySelector(".reset").classList.remove("opacity")  
    tip_amount.innerHTML = `$0.00`;
    total_amount.innerHTML = `$0.00`;
})