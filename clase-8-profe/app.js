window.addEventListener("load", function () {

  /* ------------------------------- selectores ------------------------------- */

  const numeroContador = document.querySelector("#numero-contador");
  const btnContadorMas = document.querySelector("#btn-contador-mas");
  const btnContadorMenos = document.querySelector("#btn-contador-menos");
  const btnEconomia = document.querySelector("#btn-economia");
  const btnDeportes = document.querySelector("#btn-deportes");
  const nodoTexto = document.querySelector("#texto");

  let contador = 0;

  function masUno() {
    contador++;

    numeroContador.innerHTML = contador;
  }
  function menosUno() {
    contador--;

    numeroContador.innerHTML = contador;
  }

  function cambiarColor() {
    if (numeroContador.classList.contains("verde")) {
      numeroContador.classList.replace("verde", "rojo");
    } else {
      numeroContador.classList.replace("rojo", "verde");
    }
  }

  btnContadorMas.addEventListener("click", function (evento) {
    console.log(evento);
    masUno();
  });
  btnContadorMenos.addEventListener("click", function (evento) {
    console.log(evento);
    menosUno();
  });

  btnContadorMas.addEventListener("click", cambiarColor);

  document.addEventListener("keypress", function (e) {
    console.log(e);
    nodoTexto.innerHTML += e.key;
  });

  btnDeportes.addEventListener("click", function (e) {
    const cards = document.querySelectorAll(".deportes");
    cards.forEach((item) => {
      item.classList.toggle("ocultar");
    });
  });
  btnEconomia.addEventListener("click", function (e) {
    const cards = document.querySelectorAll(".economia");
    cards.forEach((item) => {
      item.classList.toggle("ocultar");
    });
  });
});