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

async function cargarPagina() {

    let tablaPizzas = await crearTablas("pizzas", urlPizzas);
    let tablaPostres = await crearTablas("postres", urlPostres);
    let tablaEmpanadas = await crearTablas("empanadas", urlEmpanadas);
    otorgarFuncionalidadAClose()
    otorgarFuncionalidadAlBotonPedido()
    return tablaPizzas,
        tablaPostres,
        tablaEmpanadas,
        otorgarFuncionalidadAImgProductos()
}
cargarPagina()