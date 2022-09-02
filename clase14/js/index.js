/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado

- implmentar el evento "submit", utilizarlo para guardar el comentario en un array

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/


const form = document.querySelector('form');
const input = document.querySelector('#comentario');
const contenedorComentarios = document.querySelector('.comentarios');
const botonBorrar = document.querySelector('#borrar');

let arrayComentarios = JSON.parse(localStorage.getItem("comentario"));

if (arrayComentarios) {
    arrayComentarios.forEach(item => contenedorComentarios.innerHTML += `<p>${item.comentario}<span> ${item.horario}</span></p>`);
} else {
    arrayComentarios = [];
}

form.addEventListener("submit", function(e){
    e.preventDefault();

    objetoComentario();

    localStorage.setItem("comentario", JSON.stringify(arrayComentarios));

    contenedorComentarios.innerHTML = '';
    arrayComentarios.forEach(item => contenedorComentarios.innerHTML += `<p>${item.comentario}<span> ${item.horario}</span></p>`);
})

botonBorrar.addEventListener('click', function(){
    localStorage.removeItem('comentario', JSON.stringify(arrayComentarios));
    location.reload();
})


function objetoComentario(){
    let fecha = new Date();
    let horario = `${fecha.toDateString().slice(4,10)} ${fecha.toTimeString().slice(0,8)}`;

    arrayComentarios.push({
        comentario: input.value.trim(),
        horario,
    })
}