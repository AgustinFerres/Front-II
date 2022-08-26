window.addEventListener('load', function(){

    const form = this.document.querySelector('form');
    
    form.addEventListener('submit', function(e){

        const nodoListaErrores = document.querySelector('.errores');
        const name = document.querySelector('#name');
        const email = document.querySelector('#email');
        const contrasenia = document.querySelector('#contrasenia');
        const terminosYcondiciones = document.querySelector('#terminosYcondiciones');

        const ListaErrores = [];
        
        nodoListaErrores.innerHTML = '';
        
        if (name.value == '' || name.value.length > 25 || /[0-9]/.test(name.value)){
            ListaErrores.push('El campo nombre debe tener entre 1 y 25 caracteres')
        }
        if (email.value == '' || !(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(email.value))){
            ListaErrores.push('Ingrese un email valido')
        }
        if (contrasenia.value == '' || contrasenia.value.length < 8 || contrasenia.value.length > 20){
            ListaErrores.push('El campo contraseña debe tener entre 8 y 20 caracteres')
        }
        if (!terminosYcondiciones.checked){
            ListaErrores.push('Tiene que aceptar los terminos y condiciones')
        }

        if (ListaErrores.length > 0){
            e.preventDefault();
        }
        
        ListaErrores.forEach(error => nodoListaErrores.innerHTML += `<li>${error}</li>`);
    
    })
})