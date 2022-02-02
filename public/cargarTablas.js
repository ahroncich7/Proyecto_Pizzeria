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
    document.getElementById("add_to_order_window").setAttribute("product-id", `${product.id}`)
    document.getElementById("carga-productos-img").src = `${product.picture}`;
    document.getElementById("carga-productos-subtitle").textContent = `${product.name} $${product.price}`;
    document.getElementById("carga-productos-descripcion").textContent = `${product.description}`;
};