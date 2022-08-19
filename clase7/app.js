/*
Imagenes

https://es.web.img3.acsta.net/pictures/14/03/17/10/20/509771.jpg
https://upload.wikimedia.org/wikipedia/en/c/cc/A_Bug%27s_Life.jpg
https://upload.wikimedia.org/wikipedia/en/c/c0/Toy_Story_2.jpg
*/

const listaImagenes = [];

const contenedor = document.querySelector("#contenedor");

const nodoImg = document.querySelectorAll(".item img");

const articles = document.querySelectorAll('.item');





articles.forEach((item, index) => {

  const nodoA = document.createElement('a');
  const textoA = document.createTextNode(nodoImg[index]);

  nodoA.appendChild(textoA);
  item.appendChild(nodoA);

  let input = prompt("Subí tu imagen");
  nodoA.setAttribute('href', input);
  nodoA.setAttribute('target', '_blank')
  listaImagenes.push(input);
})




nodoImg.forEach((item, index) => {
  item.setAttribute("src", listaImagenes[index]);
});
