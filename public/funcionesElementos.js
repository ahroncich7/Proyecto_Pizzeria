import {
    cargarDatosEnModalAgregarAlPedido,
    cargarDatosEnModalPedido
} from "./cargarTablas.js"

export {
    asignarFuncionesAImgProductos,
    manejarFuncionesBotones
}

function manejarFuncionesBotones() {
    asignarFuncionOcultarAClose()
    asignarFuncionMostrarAlBotonPedido()
    asignarFuncionesBotonAregarAlPedido()
    asignarFuncionesBotonPedido()
}

function ocultarModal(e) {
    /** @type {HTMLElement} */
    let element = e.target
    element.parentElement.classList.add("oculto")
}

function mostrarModalPedido() {
    document.querySelector("#order-window").classList.remove("oculto")
    return false
}

function mostrarModalAgregarAlPedido() {
    document.querySelector("#add-to-order-window").classList.remove("oculto");
}

function asignarFuncionOcultarAClose() {
    document.querySelectorAll(".close").forEach((element) =>
        element.onclick = ocultarModal);
}


function asignarFuncionMostrarAlBotonPedido() {
    document.querySelector("#order-button").onclick = mostrarModalPedido;

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
    let quantity = document.getElementById("modal-quantity").value
    let productId = document.getElementById("add-to-order-window").getAttribute("product-id")
    cargarDatosEnModalPedido(productId, quantity)
    let badge = document.getElementById("badge")
    badge.setAttribute("data-value", Number(badge.getAttribute("data-value")) + 1)
    badge.innerHTML = badge.getAttribute("data-value")
    document.querySelector("#add-to-order-window .close").click()
}

function asignarFuncionesBotonPedido() {
    document.getElementById("order-confirm-button").onclick = manejarEnviarPedido;
}

function manejarEnviarPedido() {
    let orderButton = document.getElementById("order-confirm-button");
    let order = orderButton.getAttribute("data-order");
    let sendLink = document.getElementById("send-order")
    sendLink.href = `https://wa.me/573007154562?text=Hola%20Don%20Remolo,%20quisiera%20hacer%20un%20pedido:${order}`
    sendLink.click()
}