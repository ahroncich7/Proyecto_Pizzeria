/*Importa Funciones*/

import {
    cargarTablas
} from "./cargarTablas.js";

import {
    asignarFuncionesAImgProductos,
    manejarFuncionesBotones


} from "./funcionesElementos.js";

import {
    observarCambios
} from "./observer.js";


/*Define Variables y Constantes*/

const pizzasCatId = 1;
const empanadasCatId = 2;
const postresCatId = 4;


/*Maneja Pagina*/

async function cargarPagina() {
    let tablaPizzas = await cargarTablas("pizzas", pizzasCatId);
    let tablaPostres = await cargarTablas("empanadas", empanadasCatId);
    let tablaEmpanadas = await cargarTablas("postres", postresCatId);


    return tablaPizzas,
        tablaPostres,
        tablaEmpanadas,
        asignarFuncionesAImgProductos(),
        manejarFuncionesBotones(),
        observarCambios()
}
cargarPagina()



/*Pruebas*/