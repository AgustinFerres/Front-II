let htmlComputadora = document.querySelector('#computadora');
let htmlUsuario = document.querySelector('#usuario');



let jugarDeVuelta = true;

let computadora = 0;
let usuario = 0;


while(jugarDeVuelta) {
    
    /* -------------------------------------------------------------------------- */
    /*                              Eleccion maquina                              */
    /* -------------------------------------------------------------------------- */
    
    const eleccionMaquina = Math.trunc(Math.random() * 3 + 1); // 1, 2 , 3 
    
    /* -------------------------------------------------------------------------- */
    /*                              Eleccion usuario                              */
    /* -------------------------------------------------------------------------- */
    
    let eleccionUsuario = prompt('Piedra, Papel o Tijera') 
    
    /* -------------------------------------------------------------------------- */
    /*                             Traductor de input                             */
    /* -------------------------------------------------------------------------- */
    
    if (eleccionUsuario.toUpperCase() === 'PIEDRA'){
        eleccionUsuario = 1;
    }else if (eleccionUsuario.toUpperCase() === 'PAPEL'){
        eleccionUsuario = 2;
    }else if (eleccionUsuario.toUpperCase() === 'TIJERA'){
        eleccionUsuario = 3;
    }else {
        eleccionUsuario = 'Invalid input';
    }
    
    
    let comprobante = 1;
    
    /* -------------------------------------------------------------------------- */
    /*                 Comprobamos que sea un numero  y comparamos                */
    /* -------------------------------------------------------------------------- */
    
    
    if (typeof eleccionUsuario === typeof comprobante){
        if (eleccionUsuario === eleccionMaquina) {
            alert("Empate !"); // resultado = 1;
        }else if ((eleccionUsuario - eleccionMaquina) === 1 || ((eleccionUsuario - eleccionMaquina) === -2)){
            usuario++;
            alert("Ganaste !"); // resultado = 0;
        }else {
            computadora++;
            alert("Perdiste !"); // resultado = 2;
        }
    }else {
        alert('Invalid input');
    }
    
    htmlComputadora.innerHTML = `${computadora}`;
    htmlUsuario.innerHTML = `${usuario}`;
    
    jugarDeVuelta = confirm("Quieres jugar de vuelta ?");
}