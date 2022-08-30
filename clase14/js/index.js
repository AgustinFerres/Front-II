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

let arrayComentarios = JSON.parse(localStorage.getItem("comentario"));

if (arrayComentarios) {
    arrayComentarios.forEach(comentario => contenedorComentarios.innerHTML += `<p>${comentario}</p>`);
} else {
    arrayComentarios = [];
}
console.log(arrayComentarios);

form.addEventListener("submit", function(e){
    e.preventDefault();

    arrayComentarios.push(input.value.trim());

    localStorage.setItem("comentario", JSON.stringify(arrayComentarios));

    
    arrayComentarios.forEach(comentario => contenedorComentarios.innerHTML += `<p>${comentario}</p>`);

})