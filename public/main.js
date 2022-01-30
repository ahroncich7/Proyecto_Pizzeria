/*Importa Funciones*/

import {
    crearTablas
} from "./crearTablasProductos.js";

import {
    otorgarFuncionalidadAClose,
    otorgarFuncionalidadAlBotonPedido
} from "./visibilidadElementos.js";


/*Define Variables y Constantes*/

const url = "https://laomingcode-node-mysql.herokuapp.com/api/product/category/";
const urlPizzas = "https://laomingcode-node-mysql.herokuapp.com/api/product/category/1";
const urlPostres = "https://laomingcode-node-mysql.herokuapp.com/api/product/category/4";
const urlEmpanadas = "https://laomingcode-node-mysql.herokuapp.com/api/product/category/2";


/*Maneja Pagina*/
otorgarFuncionalidadAClose();
otorgarFuncionalidadAlBotonPedido();
crearTablas("pizzas", urlPizzas);
crearTablas("postres", urlPostres);
crearTablas("empanadas", urlEmpanadas);
otorgarFuncionalidadAClose();
otorgarFuncionalidadAlBotonPedido();