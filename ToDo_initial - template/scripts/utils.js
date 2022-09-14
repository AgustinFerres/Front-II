/* -------------------------------------------------------------------------- */
/*                             constantes globales                            */
/* -------------------------------------------------------------------------- */
const labels = document.querySelectorAll('label')
const errores = {
	texto: ['Tu nombre o apellido no puede contener numeros',
	'Tu nombre o apellido no puede exeder los 15 caracteres',
	'Nombre y/o Apellido no puede estar vacio'],
	email: ["Formato incorrecto", "Email no puede estar vacio"],
	contrasenia: ['Contraseña no puede exeder los 15 caracteres',
				'Contraseña no puede estar vacio', 'Las contraseñas no coinciden'],
}


/* ---------------------------------- texto --------------------------------- */

function validarTexto(texto) {

	if (!/[0-9]/.test(texto.value) && texto.value.length <= 15 && texto.value !== "") {
		labels[0].textContent = 'Nombre';
		labels[0].classList.remove('error')
		return true;
	} else {
		if (/[0-9]/.test(texto.value)){
			labels[0].textContent = errores.texto[0];
			labels[0].classList.add('error');
		}	
		if (texto.value.length > 15){
			labels[0].textContent = errores.texto[1];
			labels[0].classList.add('error');
		}
		if (texto.value === ""){
			labels[0].textContent = errores.texto[2];
			labels[0].classList.add('error');
		}
		return false;
	}
}

function normalizarTexto(texto) {
	return texto.value.trim();
}

/* ---------------------------------- email --------------------------------- */

function validarEmail(email) {
	if (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(email.value) && email.value !== "") {
		labels[2].textContent = 'Email';
		labels[2].classList.remove('error')
		return true;
	} else {
		if (!/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(email.value)){
			labels[2].textContent = errores.email[0];
			labels[2].classList.add('error');
		}
		if (email.value === ""){
			labels[2].textContent = errores.email[1];
			labels[2].classList.add('error');
		}
		return false;

	}
}

function normalizarEmail(email) {
	return email.value.trim();
}

/* -------------------------------- password -------------------------------- */

function validarContrasenia(contrasenia) {
    if (contrasenia.value.length <= 15 && contrasenia.value !== '') {
		labels[3].textContent = 'Contraseña';
        labels[3].classList.remove('error')
		return true;
    }else {
		if(contrasenia.value.length > 15){
			labels[3].textContent = errores.contrasenia[0];
			labels[3].classList.add('error');
		}
		if(contrasenia.value === ''){
			labels[3].textContent = errores.contrasenia[1];
			labels[3].classList.add('error');
		}
        return false;
    }
}

function compararContrasenias(contrasenia_1, contrasenia_2) {
    if (contrasenia_1.value !== contrasenia_2.value){
		labels[4].textContent = errores.contrasenia[2];
		labels[4].classList.add('error');
		return false;
	}
	labels[4].textContent = 'Repetir Contraseña';
	labels[4].classList.remove('error')
	return true;
}