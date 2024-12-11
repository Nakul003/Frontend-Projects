// Errors before submitting form start

let inputs = document.getElementsByTagName('input')
let errors = document.querySelectorAll('.error')
let exclamations = document.querySelectorAll('.exclamation')
Array.from(inputs).forEach((element, index) => {
    element.addEventListener('input', () => {
        if (inputs[index].value.trim() !== "") {
            inputs[index].style.border = '1px solid #3e3c49'
            errors[index].style.visibility = 'hidden'
            exclamations[index].style.visibility = 'hidden'
        }
        else {
            inputs[index].style.border = '1px solid #ff7a7a'
            errors[index].style.visibility = 'visible'
            exclamations[index].style.visibility = 'visible'

            if (index==2) {
                inputs[2].placeholder = 'email@example.com'
                inputs[2].classList.add('invaild-placeholder')
            }
        }

        // focus and click handler for inputs

        element.addEventListener('focusout', () => {
            if (inputs[index].value.trim() !== "") {
                inputs[index].style.border = '1px solid #b9b6d3'
            }
        })

        element.addEventListener('click', () => {
            if (inputs[index].value.trim() !== "") {
                inputs[index].style.border = '1px solid #3e3c49'
            }
        })
    })

    // Errors after submitting form

    document.querySelector('.submit').addEventListener('click', () => {
        let validity = element.checkValidity()

        // checks validity is true or false

        if (!validity) {
            inputs[index].style.border = '1px solid #ff7a7a'
            errors[index].style.visibility = 'visible'
            inputs[2].placeholder = 'email@example.com'
            inputs[2].classList.add('invaild-placeholder')
            exclamations[index].style.visibility = 'visible'
        }
    })
})
            
            




























