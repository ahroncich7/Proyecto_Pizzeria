import {
    obtenerProductosDeAPI
} from "./consultasAPI.js";

import {
    guardarProductosSessionStorage
} from "./storage.js";

export {
    cargarTablas,
    cargarDatosEnModalAgregarAlPedido,
    cargarDatosEnModalPedido
}

function crearTarjetas(products, sectionElement) {
    let elementCard = ""
    products.forEach(product => {
        elementCard += `<div class="product__cards product_cards" data-id="${product.id}">
                            <img src=${product.picture}  alt="${product.name}" class="product__card__img">
                            <h3 class="product__card__subtitle">${product.name}</h3>
                        </div>`
    });

    sectionElement.innerHTML = elementCard;
};

async function cargarTablas(IdHTML, catId) {
    let products = await obtenerProductosDeAPI(catId)
    let tabla = document.getElementById(IdHTML)
    crearTarjetas(products, tabla)
    guardarProductosSessionStorage(products)
}


function cargarDatosEnModalAgregarAlPedido(product) {
    document.getElementById("add-to-order-window").setAttribute("product-id", `${product.id}`)
    document.getElementById("carga-productos-img").src = `${product.picture}`;
    document.getElementById("carga-productos-subtitle").textContent = `${product.name} $${product.price}`;
    document.getElementById("carga-productos-descripcion").textContent = `${product.description}`;
    document.getElementById("modal-quantity").value = 1
};

function cargarDatosEnModalPedido(productId, quantity) {
    let tablaPedido = document.getElementById("order-board");

    let product = JSON.parse(sessionStorage.getItem(productId));

    tablaPedido.innerHTML += `<div class="board__item" data-> 
                                <input data-id= "${productId}"  
                                type="number" min="0" max="100" class="modal__quantity" value="${quantity}">
                                <p class="order__product">&nbspx ${product.category_id} ${product.name}.</p>
                                <img class="close" src="images/close_mini.svg">
                                <p class="order__product__price">$</p>
                                <p class="order__product__price_sum">$</p>
                            </div>`;
}