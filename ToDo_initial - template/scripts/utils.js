/* ---------------------------------- texto --------------------------------- */
function validarTexto(texto) {
	if (!/[0-9]/.test(texto.value) && texto.value.length <= 15 && texto.value !== "") {
		return true;
	} else {
        console.log("texto incorrecto");
		return false;
	}
}

function normalizarTexto(texto) {
	return texto.value.trim();
}

/* ---------------------------------- email --------------------------------- */
function validarEmail(email) {
	if (/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(email.value) && email.value !== "") {
		return true;
	} else {
        console.log("mail incorrecto");
		return false;
	}
}

function normalizarEmail(email) {
	return email.value.trim();
}

/* -------------------------------- password -------------------------------- */
function validarContrasenia(contrasenia) {
    if (contrasenia.value.length <= 15) {
        return true
    }else {
        console.log("contrasenia incorrecta")
        return false
    }
}

function compararContrasenias(contrasenia_1, contrasenia_2) {
    return contrasenia_1.value === contrasenia_2.value;
}
