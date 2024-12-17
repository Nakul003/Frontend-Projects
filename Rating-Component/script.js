let buttons = document.querySelectorAll('.button');
let submit = document.querySelector('.submit');
let rated = document.querySelector('.rated');
let ratingcard = document.querySelector('.rating-card')
let thankyoucard = document.querySelector('.thankyou-card')
let error = document.querySelector('.error')

// first click event to show error when someone submits without select a rating
submit.addEventListener('click', () => {
    error.style.visibility='visible'
})

// foreach loop for targeting one button at a time
buttons.forEach(button => {
    // second click event to select a rating
    button.addEventListener('click', () => {
        // hide error when someone select a rating
        error.style.visibility='hidden'
        // third click event for submitting 
        submit.addEventListener('click', () => {
            ratingcard.style.display = 'none'
            thankyoucard.style.display = 'flex'
            rated.innerHTML = `You selected ${button.textContent} out of 5`
        })
    })
    // blur event for checking the selected button is in focus or not 
    button.addEventListener('blur',()=>{
        setTimeout(()=>{
            // check which element is currently in focus
            const activeElement = document.activeElement;
            if (activeElement == document.body) {
                error.style.visibility='visible'
                submit.addEventListener('click',()=>{
                    ratingcard.style.display = 'flex'
                    thankyoucard.style.display = 'none'
                })
            }
        }, 0);
    });
});


