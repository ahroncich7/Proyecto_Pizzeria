export {
    asignarFuncionOcultarAClose,
    asignarFuncionMostrarAlBotonPedido,
    asignarFuncionMostrarAImgProductos
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


function asignarFuncionMostrarAImgProductos() {
    document.querySelectorAll(".product__card__img").forEach((element) =>
        element.parentElement.onclick = mostrarModalAgregarAlPedido
    )
}