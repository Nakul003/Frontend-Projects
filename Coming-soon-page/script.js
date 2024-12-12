let input=document.getElementById('email')
let error=document.querySelector(".text-error")


document.getElementById("button").addEventListener("click",()=>{
    let validity=input.checkValidity()
    if (!validity) {
        input.style.border='1px solid #ff5263'
        error.style.visibility="visible"
        input.placeholder="example@email.com"
        input.classList.add("invaild")
    }


    input.addEventListener("input",()=>{
        if (input.value!=="") {
            input.style.border='1px solid #c2d3ff'
            error.style.visibility="hidden"
        }
        else{
            input.style.border='1px solid #ff5263'
            error.style.visibility="visible"
        }
    })
})

    
            