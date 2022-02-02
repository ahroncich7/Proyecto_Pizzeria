import {
    crearTarjetas
} from "./crearElementos.js";

import {
    obtenerProductosDeAPI
} from "./consultasAPI.js";

import {
    guardarProductosSessionStorage
} from "./storage.js";

export {
    cargarTablas,
    cargarDatosEnModalAgregarAlPedido
}

async function cargarTablas(IdHTML, catId) {

    let products = await obtenerProductosDeAPI(catId)
    let tabla = document.getElementById(IdHTML)
    crearTarjetas(products, tabla)
    guardarProductosSessionStorage(products)
}


function cargarDatosEnModalAgregarAlPedido(product) {
    document.getElementById("carga-productos-img").src = `./images/cat${product.category_id}id${product.id}.jpg`;
    document.getElementById("carga-productos-subtitle").textContent = `${product.name} ${product.price}`;
    document.getElementById("carga-productos-descripcion").textContent = `${product.description}`;
};