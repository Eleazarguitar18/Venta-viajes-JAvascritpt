import { barcelona, roma, paris, londres } from './ciudades.js'
// obetner los elementos del DO.jsM
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

console.log(enlaces);

// *agregar un evento CLICK a cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        // *REMOVER ACTIVO
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });
        // * agregar el active al enlace actual
        this.classList.add('active')
        //* obtener el contenido correspondiente segun el enalce

        let contenido = obtenerContenido(this.textContent)


        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo


        // * AGREGAR ACTIVE AL QUE CORRESPONDA
        // * TRAER LA INFORMACION DEL OBEJTO CORRESPONDIENTE A LA ELECCION
        // * MOSTRAR EL CONTENIDO EN EL DOM
    })
})
// *FUNCION para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace) {
    let contendido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres
    }
    return contendido[enlace];
}