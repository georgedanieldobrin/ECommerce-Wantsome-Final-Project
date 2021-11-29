if (localStorage.getItem('isLogged') == 'true') {
	window.location.replace("../Main_Page/index.html");
}

let email = document.forms['form']['email'];
let password = document.forms['form']['password'];

let success = document.getElementById('success');
let password_error = document.getElementById('password_error');

let userErr = confirmErr = false;

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);


function validated() {

	let user = localStorage.getItem(email.value);
	let data = JSON.parse(user);
	
	if (user == null) {
		email.classList.add("input-2");
		email.classList.remove("input-1");

		password_error.style.visibility = "visible";
		password.classList.add("input-2");
		password.classList.remove("input-1");
		return false;
	} else {
		userErr = true;
	}

	if (email.value != data.email || password.value != data.password) {
		email.classList.add("input-2");
		email.classList.remove("input-1");

		password_error.style.visibility = "visible";
		password.classList.add("input-2");
		password.classList.remove("input-1");
		return false;
	} else {
		confirmErr = true;
	}

	if ((userErr && confirmErr) == true) {
		success.style.visibility = "visible";
		password_error.style.visibility = "hidden";
		
		password.classList.add("input-1");
		password.classList.remove("input-2");
		email.classList.add("input-1");
		email.classList.remove("input-2");

		document.getElementById("submit-button").disabled = true;

		let input = document.querySelectorAll('input');
		for(let inp of input) {
			inp.disabled = true;
		}

		setTimeout(function () {
			localStorage.setItem('isLogged', 'true');
			window.location.replace("../Main_Page/index.html");
		}, 5000)
	}
	return false;

}


function email_Verify() {
	if (email.value.length >= 12) {
		email.classList.remove("input-2");
		email.classList.add("input-1");
		return true;
	}
}

function pass_Verify() {
	if (password.value.length > 4) {
		password.classList.remove("input-2");
		password.classList.add("input-1");
		password_error.style.visibility = "hidden";
		return true;
	}
}


const togglePassword = document.querySelector('#togglePassword');

togglePassword.addEventListener('click', function (e) {
	const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
	password.setAttribute('type', type);
	this.classList.toggle('fa-eye');
});