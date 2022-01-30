/*Importa Funciones*/

import {
    crearTablas
} from "./crearTablasProductos.js";

import {
    otorgarFuncionalidadAClose,
    otorgarFuncionalidadAImgProductos,
    otorgarFuncionalidadAlBotonPedido,

} from "./visibilidadElementos.js";


/*Define Variables y Constantes*/

const url = "https://laomingcode-node-mysql.herokuapp.com/api/product/category/";
const urlPizzas = "https://laomingcode-node-mysql.herokuapp.com/api/product/category/1";
const urlPostres = "https://laomingcode-node-mysql.herokuapp.com/api/product/category/4";
const urlEmpanadas = "https://laomingcode-node-mysql.herokuapp.com/api/product/category/2";


/*Maneja Pagina*/

async function manejarPagina() {

    let pizzas = await crearTablas("pizzas", urlPizzas);
    let postres = await crearTablas("postres", urlPostres);
    let empanadas = await crearTablas("empanadas", urlEmpanadas);
    return pizzas,
        postres,
        empanadas,
        otorgarFuncionalidadAImgProductos()
}


manejarPagina()

otorgarFuncionalidadAClose()
otorgarFuncionalidadAlBotonPedido()