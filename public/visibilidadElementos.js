export {
    otorgarFuncionalidadAClose,
    otorgarFuncionalidadAlBotonPedido,
    mostrarModalAgregarAlPedido,
    otorgarFuncionalidadAImgProductos
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

function otorgarFuncionalidadAClose() {
    document.querySelectorAll(".close").forEach((element) =>
        element.onclick = ocultarModal);
}


function otorgarFuncionalidadAlBotonPedido() {
    document.querySelector("#order_button").onclick = mostrarModalPedido;

}


function mostrarModalAgregarAlPedido() {
    document.querySelector("#add_to_order_window").classList.remove("oculto");
}

function otorgarFuncionalidadAImgProductos() {
    document.querySelectorAll(".product__card__img").forEach((element) =>
        element.onclick = mostrarModalAgregarAlPedido
    )
}