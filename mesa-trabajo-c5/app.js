const body = document.body;



/* ----------------------------------- h1 ----------------------------------- */

const h1 = document.createElement('h1');
const h1Texto = document.createTextNode('La familia de los felinos');

h1.appendChild(h1Texto)
body.appendChild(h1);

/* ---------------------------------- boton --------------------------------- */

const divBoton = document.createElement('div');
divBoton.classList.add('boton')
const boton = document.createElement('button');
boton.setAttribute('onclick', 'darkMode()')
const botonTexto = document.createTextNode('🌙');

boton.appendChild(botonTexto);
divBoton.appendChild(boton);
body.appendChild(divBoton)

/* ----------------------------- objeto de items ---------------------------- */
const items = {
    imagenes: [
        "./imagenes/tiger.jpg",
        "./imagenes/leon.jpg",
        "./imagenes/leopardo.jpg",
        "./imagenes/pantera-negra.jpg",
        "./imagenes/jaguar.jpg",
        "./imagenes/chita.jpg",
    ],
    h2: [
        "El tigre",
        "El leon",
        "El leopardo",
        "La pantera negra",
        "El jaguar",
        "El guepardo",
    ],
    p: [
        "El tigre (Panthera tigris) es una de las especies de la subfamilia de los panterinos (familia Felidae) pertenecientes al género Panthera. Se encuentra solamente en el continente asiático; es un predador carnívoro y es la especie de félido más grande del mundo junto con el león pudiendo alcanzar ambos un tamaño comparable al de los fósiles de félidos de mayor tamaño.",
        "El león (Panthera leo) es un mamífero carnívoro de la familia de los félidos y una de las cinco especies del género Panthera. Los leones salvajes viven en poblaciones cada vez más dispersas y fragmentadas del África subsahariana (a excepción de las regiones selváticas de la costa del Atlántico y la cuenca del Congo) y una pequeña zona del noroeste de India",
        "El leopardo (Panthera pardus) es un mamífero carnívoro de familia de los félidos. Al igual que tres de los demás félidos del género Panthera: el león, el tigre y el jaguar, están caracterizados por una modificación en el hueso hioides que les permite rugir. También se lo conoce como pantera parda y, cuando presenta un pelaje completamente oscuro como pantera negra (melánico).",
        "La pantera negra es una variación negra (melanismo) de varias especies de grandes félidos, en especial del leopardo (Panthera pardus) y del jaguar (Panthera onca). Pero cabe recalcar que no es una nueva especie, ni siquiera una subespecie, es simplemente una variación negra de estos animales.",
        "El jaguar, yaguar o yaguareté (Panthera onca) es un carnívoro félido de la subfamilia de los Panterinos y género Panthera. Es la única de las cinco especies actuales de este género que se encuentra en América. También es el mayor félido de América y el tercero del mundo, después del tigre (Panthera tigris) y el león (Panthera leo).",
        "El guepardo o chita (Acinonyx jubatus)1 es un miembro atípico de la familia de los félidos. Es el único representante vivo del género Acinonyx. Caza gracias a su vista y a su gran velocidad. Es el animal terrestre más veloz, ya que alcanza una velocidad punta de 115 km/h en carreras de hasta cuatrocientos o quinientos metros.",
    ],
};

/* ------------------------------- contenedor ------------------------------- */

const contenedor = document.createElement('div');
contenedor.classList.add('contenedor');

body.appendChild(contenedor);

/* ------------------------------ creamos items ----------------------------- */

for (let i = 0; i < items.h2.length; i++) {

    /* -------------------------------- elementos ------------------------------- */
    const item = document.createElement('div');
    item.classList.add('item')
    const img = document.createElement('img')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    
        /* -------------------------------- contenido ------------------------------- */
        img.setAttribute('src', items.imagenes[i]);
        const h2Texto = document.createTextNode(items.h2[i]);
        const pTexto = document.createTextNode(items.p[i]);

        /* -------------------------------- enlazamos ------------------------------- */
        h2.appendChild(h2Texto);
        p.appendChild(pTexto);

        item.appendChild(img);
        item.appendChild(h2);
        item.appendChild(p);

    contenedor.appendChild(item);
}

/* -------------------------------------------------------------------------- */
/*                                  funciones                                 */
/* -------------------------------------------------------------------------- */

function darkMode() {
    let body = document.body;
    let boton = document.querySelector('button')

    body.classList.toggle('dark')

    if(boton.textContent == '🌙'){
        boton.textContent = '💡';
    }else {
        boton.textContent = '🌙';
    }
}   