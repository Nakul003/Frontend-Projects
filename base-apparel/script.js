let submit = document.getElementById('submit')
let input = document.getElementById('email')
let errortext = document.querySelector('.error-text')
let error = document.querySelector('.error')
let hero1=document.querySelector('.hero-1')
let hero2=document.querySelector('.hero-2')

submit.addEventListener('click', () => {
    let vailidity = input.checkValidity()

    if (!vailidity) {
        input.style.border = '1px solid #f96262'
        errortext.style.visibility = 'visible'
        error.style.visibility = 'visible'
    }

    input.addEventListener('input', () => {
        if (input.value !== ''){
            input.style.border = '1px solid #ce9797'
            errortext.style.visibility = 'hidden'
            error.style.visibility = 'hidden'
        }

        else {
            input.style.border = '1px solid #f96262'
            errortext.style.visibility = 'visible'
            error.style.visibility = 'visible'
        }
    })
})


function handleResize() {
    if (window.innerWidth >= 768) {
        hero2.style.display = 'flex';
        hero1.style.display = 'none';
    } else {
        hero1.style.display = 'flex';
        hero2.style.display = 'none';
    }
}
handleResize();

window.addEventListener('resize', handleResize);


