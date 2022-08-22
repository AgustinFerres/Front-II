/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */

let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

  datosPersona.nombre = prompt('Ingresa tu nombre');

  datosPersona.edad = (2022 - Number(prompt('Ingresa tu año de nacimiento')));

  datosPersona.ciudad = prompt('Ingresa tu ciudad');

  datosPersona.interesPorJs = confirm('Te interesa java') ? 'Si' : 'No'; 

}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  
  const nodosSpan = document.querySelectorAll('.card-header h3 span');

  const arrayDatosPersona = Object.values(datosPersona);
  
  nodosSpan.forEach((item, i) => item.textContent = arrayDatosPersona[i]);
  
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const contenedor = document.querySelector('#fila');

  contenedor.innerHTML = ``;

  listado.forEach(materia =>{

    contenedor.innerHTML += `

      <article class='caja' >
        <img src='${materia.imgUrl}' alt='${materia.lenguajes}'/>
        <p class='lenguajes'> Lenguajes: ${materia.lenguajes}</p>
        <p class='bimestre'> Bimestre: ${materia.bimestre}</p>
      </article>

    `;
  });
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const sitio = document.querySelector('#sitio');

  sitio.classList.toggle('dark');
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

document.addEventListener('keypress', function(e){
  
  const parrafo = document.querySelector('#sobre-mi');

  if(e.key === 'f' || e.key === 'F'){
    parrafo.classList.remove('oculto');
  }
});
