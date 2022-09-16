// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.
(function comprobacion() {
	const jwt = localStorage.getItem("jwt");

	if (!jwt) {
		location.replace("/");
	}
})();

/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener("load", function () {
	/* ---------------- variables globales y llamado a funciones ---------------- */

	const ENDPOINTBASE = "https://ctd-todo-api.herokuapp.com/v1";
	const JWT = this.localStorage.getItem('jwt');

  const btnCerrarSesion = this.document.querySelector('#closeApp');
  const nodoNombreUsuario = this.document.querySelector('.user-info p');
  const contenedorTareasPendientes = this.document.querySelector('.tareas-pendientes');
  const contenedorTareasTerminadas = this.document.querySelector('.tareas-terminadas');
  const formCrearTarea = this.document.querySelector('form.nueva-tarea');
  const nodoTextoTarea = this.document.querySelector('#nuevaTarea');

	/* -------------------------------------------------------------------------- */
	/*                          FUNCIÓN 1 - Cerrar sesión                         */
	/* -------------------------------------------------------------------------- */

	btnCerrarSesion.addEventListener("click", function () {

    localStorage.clear();
    location.replace('/');
  });

	/* -------------------------------------------------------------------------- */
	/*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
	/* -------------------------------------------------------------------------- */

	function obtenerNombreUsuario() {

    const url = ENDPOINTBASE + '/users/getMe'

    const config = {
      method: 'GET',
      headers: {
        authorization: JWT
      }
    }

    fetch(url, config)
    .then(res => res.json())
    .then(data => nodoNombreUsuario.textContent = data.firstName)
  }

  obtenerNombreUsuario();

	/* -------------------------------------------------------------------------- */
	/*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
	/* -------------------------------------------------------------------------- */

	function consultarTareas() {

    const url = ENDPOINTBASE + '/tasks';

    const config = {
      method: 'GET',
      headers: {
        authorization: JWT,
      }
    }

    fetch(url, config)
    .then(res => res.json())
    .then(data => {
      renderizarTareas(data);
      botonesCambioEstado(data);
      botonBorrarTarea();
    })
  }
  consultarTareas();

	/* -------------------------------------------------------------------------- */
	/*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
	/* -------------------------------------------------------------------------- */

	formCrearTarea.addEventListener("submit", function (e) {
    e.preventDefault();

    const url = ENDPOINTBASE + '/tasks';

    const config = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: JWT,
      },
      body: JSON.stringify({
        description: nodoTextoTarea.value,
        completed: false,
      })
    }

    fetch(url, config)
    .then(res => res.json())
    .then(data => consultarTareas())
    


  });

	/* -------------------------------------------------------------------------- */
	/*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
	/* -------------------------------------------------------------------------- */
	function renderizarTareas(listado) {

    // filtramos las terminadas
    const listadoTareasTerminadas = listado.filter( item => item.completed)
    const listadoTareasPendientes = listado.filter( item => !item.completed)

    contenedorTareasPendientes.innerHTML = '';
    contenedorTareasTerminadas.innerHTML = '';


    listadoTareasPendientes.forEach( tarea => {
      // por cada tarea inyectamos un nodo li
      contenedorTareasPendientes.innerHTML += `
      <li class="tarea" data-aos="fade-down">
        <button class="change" id="${tarea.id}"><i class="fa-regular fa-circle"></i></button>
        <div class="descripcion">
          <p class="nombre">${tarea.description}</p>
          <p class="timestamp">${tarea.createdAt}</p>
        </div>
      </li>
      `
    })
    
    listadoTareasTerminadas.forEach( tarea => {
      // por cada tarea inyectamos un nodo li
      contenedorTareasTerminadas.innerHTML += `
      <li class="tarea" data-aos="fade-up">
        <div class="hecha">
          <i class="fa-regular fa-circle-check"></i>
        </div>
        <div class="descripcion">
          <p class="nombre">${tarea.description}</p>
          <div class="cambios-estados">
            <button class="change incompleta" id="${tarea.id}" ><i class="fa-solid fa-rotate-left"></i></button>
            <button class="borrar" id="${tarea.id}"><i class="fa-regular fa-trash-can"></i></button>
          </div>
        </div>
      </li>
      `
    })
  }

	/* -------------------------------------------------------------------------- */
	/*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
	/* -------------------------------------------------------------------------- */
	function botonesCambioEstado(tarea) {

    const nodoBotonesCambioEstado = document.querySelectorAll('.change');

    nodoBotonesCambioEstado.forEach(btn => {

      btn.addEventListener('click', function(e){

        const url = ENDPOINTBASE + `/tasks/${btn.id}`;

        const terminada = btn.classList.contains('incompleta')


        const config = {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
            authorization: JWT,
          },
          body: JSON.stringify({
            completed: !terminada,
          })
        }

        fetch(url, config)
        .then(res => res.json())
        .then(data => consultarTareas())
      })
    })
  }
  

  

	/* -------------------------------------------------------------------------- */
	/*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
	/* -------------------------------------------------------------------------- */
	function botonBorrarTarea() {

    const nodoBotonesBorrar = document.querySelectorAll('.borrar');

    nodoBotonesBorrar.forEach(btn => {

      btn.addEventListener('click', function(e){

        const url = ENDPOINTBASE + `/tasks/${btn.getAttribute('id')}`;

        const config = {
          method: 'DELETE',
          headers: {
            authorization: JWT,
          },
        }

        fetch(url, config)
        .then(res => res.json())
        .then(data => consultarTareas())
      })
    })
  }
});
