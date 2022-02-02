import { cargarDatosEnModalAgregarAlPedido } from "./cargarTablas.js"

export {
    asignarFuncionOcultarAClose,
    asignarFuncionMostrarAlBotonPedido,
    asignarFuncionesAImgProductos,
    asignarFuncionesBotonAregarAlPedido
}

function ocultarModal(e) {
    /** @type {HTMLElement} */
    let element = e.target
    element.parentElement.classList.add("oculto")
}

function mostrarModalPedido() {
    document.querySelector("#order_window").classList.remove("oculto")
    return false
}

function mostrarModalAgregarAlPedido() {
    document.querySelector("#add_to_order_window").classList.remove("oculto");
}

function asignarFuncionOcultarAClose() {
    document.querySelectorAll(".close").forEach((element) =>
        element.onclick = ocultarModal);
}


function asignarFuncionMostrarAlBotonPedido() {
    document.querySelector("#order_button").onclick = mostrarModalPedido;

}


function asignarFuncionesAImgProductos() {
    document.querySelectorAll(".product__card__img").forEach((element) =>
        element.parentElement.onclick = asignarFuncionesModalAgregarAlPedido
    )
}

function asignarFuncionesModalAgregarAlPedido(event) {
    let productId = event.target.parentElement.getAttribute("data-id")
    let product = JSON.parse(sessionStorage.getItem(productId))
    cargarDatosEnModalAgregarAlPedido(product)
    mostrarModalAgregarAlPedido()
}

function asignarFuncionesBotonAregarAlPedido() {
    document.getElementById("add-to-order-button").onclick = manejarCargaAPedido
}

function manejarCargaAPedido() {
    let select = document.querySelector("#add_to_order_window select");
    let quantity = select.value
    let productId = document.getElementById("add_to_order_window").getAttribute("product-id")
    document.querySelector("#add_to_order_window .close").click()
}