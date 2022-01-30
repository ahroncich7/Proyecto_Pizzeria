import {
    crearTarjetas
} from "./crearElementos.js";

export function crearTablas(id, url) {
    let tabla = document.getElementById(id)
    tabla.innerHTML = `<p>Cargando...</p>`;
    return fetch(url)
        .then((r) => r.json())
        .then((data) => crearTarjetas(data.data, tabla))
        .then((r) => r)
        .catch((error) => console.log(error))
}

export function cargarDatosEnModalAgregarAlPedido(product) {
    document.getElementById("carga-productos-img").src = `./images/cat${product.category_id}id${product.id}.jpg`;
    document.getElementById("carga-productos-subtitle").textContent = `${product.name} ${product.price}`;
    document.getElementById("carga-productos-descripcion").textContent = `${product.description}`;
};