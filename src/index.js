import "./styles.css"

const form = document.getElementById('form');

const name = document.querySelector('#name');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword')

const errorMessages = {
	name: "Name must be between 2-20 chars, my guy!",
	email: "Please insert a valid mail.",
	country: "Please select a country.",
	zip: "Enter valid zip.",
    password: "Password must be at least 8 characters long, including an uppercase letter, a lowercase letter, a number, and a special symbol.",
    confirmPassword: "The password doesn't match the previous one."	
}

const constraints = {
  ch: [
    "^(CH-)?\\d{4}$",
    "Swiss postal codes must have exactly 4 digits: e.g. CH-1950 or 1950",
  ],
  fr: [
    "^(F-)?\\d{5}$",
    "French postal codes must have exactly 5 digits: e.g. F-75012 or 75012",
  ],
  de: [
    "^(D-)?\\d{5}$",
    "German postal codes must have exactly 5 digits: e.g. D-12345 or 12345",
  ],
  ind: [
    "^[1-9][0-9]{5}$",
    "Indian postal codes must be exactly 6 digits long, e.g. 110001",
  ],
  aus: [
    "^(AUS-)?\\d{4}$",
    "Australian postal codes must be exactly 4 digits, e.g. AUS-2000 or 2000",
  ],
  nz: [
    "^(NZ-)?\\d{4}$",
    "New Zealand postal codes must be exactly 4 digits, e.g. NZ-6011 or 6011",
  ],
  "": [
	"",
	"Select country first!"
  ]
};



function displayMessage(inputElmnt, msg = errorMessages[inputElmnt.id]) {
	const errorDiv = inputElmnt.nextElementSibling;
	errorDiv.innerHTML = msg;
}

function clearErrorDiv(inputElmnt) {
	const errorDiv = inputElmnt.nextElementSibling;
	errorDiv.innerHTML = '';
}

name.addEventListener('input', (e) => {
	name.setCustomValidity("");
  	if (!name.validity.valid) {
		displayMessage(name);
    	return;
  	}
	clearErrorDiv(name);
});

email.addEventListener('input', (e) => {
	email.setCustomValidity("");
  	if (!email.validity.valid) {
		displayMessage(email);
    	return;
  	}
	clearErrorDiv(email);
});

country.addEventListener('input', (e) => {
	country.setCustomValidity("");
  	if (!country.validity.valid) {
		displayMessage(country);
    	return;
  	}
	clearErrorDiv(country);

});

zip.addEventListener('input', (e) => {
	const countryValue = country.value;
	if(countryValue === "") {
		zip.setCustomValidity("Select a country first!");
		displayMessage(zip, constraints[""][1]);
		return;
	}
	const zipValue = zip.value; 
  	const constraint = new RegExp(constraints[countryValue][0]);

	if(constraint.test(zipValue)) {
		zip.setCustomValidity("");
		clearErrorDiv(zip);
	} else {
		zip.setCustomValidity(constraints[countryValue][1]);
		displayMessage(zip, constraints[countryValue][1])
	}
});

password.addEventListener('input', (e) => {
	const passwordValue = password.value;
	const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{8,}$/;

	if(passwordPattern.test(passwordValue)) {
		password.setCustomValidity("");
		clearErrorDiv(password);
	} else {
		password.setCustomValidity("Password must be at least 8 characters long, including an uppercase letter, a lowercase letter, a number, and a special symbol.");
		displayMessage(password);
	}
});

confirmPassword.addEventListener('input', (e) => {
	const passwordValue = password.value;
	const confirmPasswordValue = confirmPassword.value;
	console.log(passwordValue);
	console.log(confirmPasswordValue);
	if(passwordValue === confirmPasswordValue) {
		confirmPassword.setCustomValidity("");
		clearErrorDiv(confirmPassword);
	} else {
		confirmPassword.setCustomValidity("Passwords dont match");
		displayMessage(confirmPassword);
	}
});
