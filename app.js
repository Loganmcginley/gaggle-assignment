// Modal Items

const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('.main-btn');
const closeBtn = document.querySelector('.close-btn');

// Click Events
openBtn.addEventListener('click', () => {
    modal.style.display= 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.style.display = 'none';
    }
});

// Form Validation
const form = document.getElementById('form');
const name = document.getElementById('form');
const email = document.getElementById('form');
const password  = document.getElementById('form');

// Show error message
function showError(input, message) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation';

    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;
}

//Show valid message
function showValid(input) {
    const formValidation = input.parentElement;
    formValidation.className = 'form-validation valid'; 
}
//Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
        showError(input, `${getFieldName(input)} is required`);
        } else {
            showValid(input);
        }
    })
}
//Check input length
function checkLength(input, min, max) {
    if(input.value.length <min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showValid(input);
    }
}

// Get fieldname
function getFieldName(input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}


// Event Listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([name, email, password]);
    checkLength(name, 3, 30);
    checkLength(password, 8, 25);
})


//Hide & Show Password

// function Toggle() {
//     var temp = document.getElementById("password");
//     if (temp.type === "password") {
//         temp.type = "text";
//     }
//     else {
//         temp.type = "password";
//     }
// }