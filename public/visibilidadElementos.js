export {
    otorgarFuncionalidadAClose,
    otorgarFuncionalidadAlBotonPedido,
    mostrarModalAgregarAlPedido
}

function ocultarModal(e) {
    /** @type {HTMLElement} */
    let element = e.target
    element.parentElement.classList.add("oculto")
}


function mostrarModalPedido() {
    document.querySelector("#order_window").classList.remove("oculto")
}

function otorgarFuncionalidadAClose() {
    document.querySelectorAll(".close").forEach((element) =>
        element.onclick = ocultarModal);
}

function mostrarModalAgregarAlPedido() {
    document.querySelector("#add_to_order_window").classList.remove("oculto");
}

function otorgarFuncionalidadAlBotonPedido() {
    document.querySelector("#order_button").onclick = ((event) =>
        event.preventDefault(),
        mostrarModalPedido)
}