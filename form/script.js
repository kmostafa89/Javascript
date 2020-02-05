// read in the variables you want to manipulate
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// error function
function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = message;
}

// success function
function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
// check email is valid
function checkEmail(input) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (re.test(input.value.trim())) {
		showSuccess(input);
	} else {
		showError(input, 'EMail is not valid');
	}
}

// check required field
function checkRquired(inputArr) {
	inputArr.forEach(function(input) {
		if (input.value.trim() === '') {
			showError(input, `${getFieldName(input)}  is required`);
		} else {
			showSuccess(input);
		}
	});
}

// check input length password must be between 6 and 20 characters
function checkLength(input, min, max) {
	if (input.value.length < min) {
		showError(input, `${getFieldName(input)} must be at least ${min} characters`);
	} else if (input.value.lenght > max) {
		showError(input, `${getFieldName(input)} field cant be more than ${max} characters`);
	} else {
		showSuccess(input);
	}
}

// check passwords match

// get field name
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// event listener - function(e) where e is the event

form.addEventListener('submit', function(e) {
	e.preventDefault();
	// check field values has been filled
	// check the quality of the email
	checkRquired([ username, email, password, password2 ]);
	checkEmail(email);
	checkLength(password, 6, 20);
});
