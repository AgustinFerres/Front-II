window.addEventListener("load", function () {
	/* ---------------------- obtenemos variables globales ---------------------- */

	const form = this.document.querySelector(".container form");
	const inputNombre = this.document.querySelector("#inputNombre");
	const inputApellido = this.document.querySelector("#inputApellido");
	const inputEmail = this.document.querySelector("#inputEmail");
	const inputPassword = this.document.querySelector("#inputPassword");
	const inputPasswordRepetida = this.document.querySelector(
		"#inputPasswordRepetida"
	);

	/* -------------------------------------------------------------------------- */
	/*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
	/* -------------------------------------------------------------------------- */
	form.addEventListener("submit", function (e) {
		e.preventDefault();

		const usuario = {
			firstName: inputNombre.value,
			lastName: inputApellido.value,
			email: inputEmail.value,
			password: inputPassword.value,
		};

		realizarRegister(usuario);
	});

	/* -------------------------------------------------------------------------- */
	/*                    FUNCIÓN 2: Realizar el signup [POST]                    */
	/* -------------------------------------------------------------------------- */
	function realizarRegister(user) {
		const url = "https://ctd-todo-api.herokuapp.com/v1/users";

		const config = {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(user),
		};

		fetch(url, config)
			.then((res) => res.json())
			.then((data) => {
				if (data) {
					location.replace("/");
				}
			});
	}
});
