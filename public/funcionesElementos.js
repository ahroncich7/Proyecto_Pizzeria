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
    asignarFuncionesAlBotonPedido()
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

function manejarModalPedido() {
    mostrarModalPedido();
    let badge = document.getElementById("badge");
    badge.textContent = ""
}

function mostrarModalAgregarAlPedido() {
    document.querySelector("#add-to-order-window").classList.remove("oculto");
}

function asignarFuncionOcultarAClose() {
    document.querySelectorAll(".close").forEach((element) =>
        element.onclick = ocultarModal);
}


function asignarFuncionesAlBotonPedido() {
    document.querySelector("#order-button").onclick = manejarModalPedido;

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

    document.querySelectorAll("#order-board input").forEach(element => {
        element.oninput = manejarCambiosOrden
    })
    manejarCambiosOrden()
    asignarFuncionesBotonCloseItem();

}

function asignarFuncionesBotonPedido() {
    document.getElementById("order-confirm-button").onclick = manejarEnviarPedido;
}

function manejarEnviarPedido() {
    let orden = ""
    let items = document.querySelectorAll(".board__item")
    items.forEach((element) =>
        orden += element.getAttribute("data-order")
    )
    let CostoTotal = document.getElementById("total-order-cost").getAttribute("data-total")
    let sendLink = document.getElementById("send-order")
    sendLink.href = `https://wa.me/573007154562?text=Hola%20Don%20Remolo,%20quisiera%20hacer%20un%20pedido:${orden + "por un total de " + CostoTotal}`
    sendLink.click()
}



function manejarCambiosOrden() {
    let products = document.querySelectorAll(".board__item");
    let sum = 0;
    products.forEach((element) => {
        let quantityElement = element.querySelector(" input");
        let quantity = quantityElement.value;
        quantityElement.setAttribute("value", quantity);

        let elementId = quantityElement.getAttribute("data-id");
        let product = JSON.parse(sessionStorage.getItem(elementId))
        let unitPrice = product.price;
        let category = product.category_id
        let name = product.name

        element.querySelector(".order__product__price").textContent = "$ " + unitPrice;
        element.querySelector(".order__product__price_sum").textContent = "$ " + unitPrice * quantity;
        element.setAttribute("data-order", quantity + " x " + category + " " + name + ", ")
        sum += unitPrice * quantity;
    })
    document.getElementById("total-order-cost").textContent = "$ " + sum;
    document.getElementById("total-order-cost").setAttribute("data-total", "$ " + sum)
}

function closeRemoveItem(event) {
    let itemBox = event.target.parentElement;
    let quantityElement = itemBox.querySelector(" input");
    quantityElement.value = 0;
    quantityElement.oninput()
    itemBox.remove();
}

function asignarFuncionesBotonCloseItem() {
    document.querySelectorAll(".board__item .close").forEach((element) => {
        element.onclick = closeRemoveItem;
    })
}