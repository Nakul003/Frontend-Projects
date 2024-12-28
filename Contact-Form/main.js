const inputs = document.getElementsByTagName("input");
const errors = document.querySelectorAll(".error");
const form = document.getElementById('myform');

Array.from(inputs).forEach((input, index) => {
    // error checking before submission
    input.addEventListener('input', () => {

        // show error and changes border color when input field is empty and hide when filled 
        if (input.value.trim() !== '') {
            if (input == inputs[0] || input == inputs[1] || input == inputs[2]) {
                input.style.border = "";
                errors[index].style.visibility = 'hidden';
                inputs[0].value = inputs[0].value.replace(/[^a-zA-Z]/g, '')
                inputs[1].value = inputs[1].value.replace(/[^a-zA-Z]/g, '')
                input.style.backgroundColor = '#e0f1e7';
            }
        }

        else {
            input.style.border = "1px solid #d73c3c";
            errors[index].style.visibility = 'visible';
            input.style.backgroundColor = '';
        }
    })

    input.addEventListener('click', () => {
        // display radio img when a radio is clicked
        if (input == inputs[3] || input == inputs[4]) {
            if (input.checked == inputs[3].checked) {
                document.querySelector('.radio-1').style.visibility = 'visible';
                document.querySelector('.radio-2').style.visibility = 'hidden';
                document.querySelector('.general-enquiry').style.backgroundColor = '#e0f1e7';
                document.querySelector('.support-request').style.backgroundColor = '';
                document.querySelector('.general-enquiry').style.border = '1px soild #9cbbb3';
                document.querySelector('.support-request').style.border = '';
                errors[3].style.visibility = 'hidden'; //hide error when clicked after submission
            }
            else {
                document.querySelector('.radio-2').style.visibility = 'visible';
                document.querySelector('.radio-1').style.visibility = 'hidden';
                document.querySelector('.support-request').style.backgroundColor = '#e0f1e7';
                document.querySelector('.general-enquiry').style.backgroundColor = '';
                document.querySelector('.support-request').style.border = '1px soild #9cbbb3';
                document.querySelector('.general-enquiry').style.border = '';
                errors[3].style.visibility = 'hidden'; //hide error when clicked after submission
            }
        }

        // show error when checkbox is not checked and hide when checked 
        if (input == inputs[5]) {
            if (inputs[5].checked) {
                errors[5].style.visibility = 'hidden';
                document.querySelector('.checked').style.visibility = 'visible'; // make checkbox img visible
                document.querySelector('.checked').addEventListener('click', () => { //show error when user click on checkbox img, hide checkbox img and make checkbox not checked 
                    document.querySelector('.checked').style.visibility = 'hidden';
                    inputs[5].checked = '';
                    errors[5].style.visibility = 'visible'; // make checkbox img visible
                })
            }
            else {
                errors[5].style.visibility = 'visible';
                document.querySelector('.checked').style.visibility = 'hidden'; // make checkbox img hide
            }
        }
    })

    // show error and changes border color when textarea is empty and hide when filled
    document.getElementById('message').addEventListener("input", () => {

        if (document.getElementById('message').value.trim() !== '') {
            document.getElementById('message').style.border = "";
            errors[4].style.visibility = 'hidden';
        }

        else {
            document.getElementById('message').style.border = "1px solid #d73c3c";
            errors[4].style.visibility = 'visible';
        }
    })


    // error checking after submission 

    document.querySelector(".submit").addEventListener("click", (event) => {

        // check input field after submision to show error if not filled and hide error if filled  
        if (input.value.trim() !== '') {
            if (input == inputs[0] || input == inputs[1] || input == inputs[2]) {
                input.style.border = "";
                errors[index].style.visibility = 'hidden';
                if (inputs[2].checkValidity() == false) {
                    inputs[2].style.border = "1px solid #d73c3c";
                    errors[2].style.visibility = 'visible';
                }
            }
        }

        else {
            input.style.border = "1px solid #d73c3c";
            errors[index].style.visibility = 'visible';
            isvalid = false;
        }

        // check radio button to show error if not checked and hide error if checked
        if (inputs[3].checked || inputs[4].checked) {
            errors[3].style.visibility = 'hidden';
        }

        else {
            errors[3].style.visibility = 'visible';
            isvalid = false;
        }


        // check message field after submision to show error if not filled and hide error if filled
        if (document.getElementById('message').value.trim() !== '') {
            if (document.getElementById('message').value.length > 10) {

                document.getElementById('message').style.border = "";
                errors[4].style.visibility = 'hidden';

            }
            else {
                document.getElementById('message').style.border = "1px solid #d73c3c";
                errors[4].innerHTML = "Should have more than 10* Characters "
                errors[4].style.visibility = 'visible';
                isvalid = false;
                event.preventDefault();
            }
        }

        else {
            document.getElementById('message').style.border = "1px solid #d73c3c";
            errors[4].style.visibility = 'visible';
            isvalid = false;
            event.preventDefault();
        }

        //hide error when checkbox is checked and show error when notchecked 
        if (inputs[5].checked) {
            errors[5].style.visibility = 'hidden';
        }

        else {
            errors[5].style.visibility = 'visible';
            isvalid = false;
        }
    });
});














