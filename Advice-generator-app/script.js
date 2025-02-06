const data = new Request("https://api.adviceslip.com/advice");
const quote = document.querySelector(".quote");
const dice = document.querySelector(".dice");
const advice_no = document.querySelector(".advice-number") 

function advice() {
    window
    .fetch(data)
    .then((response)=>{
        if (!response.ok) {
            throw new Error(`HTTP erorr! Status:${response.status}`);
        }
    
        else{
            return response.json()
        }
    })
    .then((data)=>{
        quote.innerHTML = `"${data.slip.advice}"`
        advice_no.innerHTML = `#${data.slip.id}`
        console.log(data.slip);
    })
    .catch((error)=>{
        console.error("fetch error:",error);
    })
}

advice()

dice.addEventListener("click",()=>{
    advice()
})
    
    


