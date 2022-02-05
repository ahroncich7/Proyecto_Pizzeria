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
    document.getElementById("add_to_order_window").setAttribute("product-id", `${product.id}`)
    document.getElementById("carga-productos-img").src = `${product.picture}`;
    document.getElementById("carga-productos-subtitle").textContent = `${product.name} $${product.price}`;
    document.getElementById("carga-productos-descripcion").textContent = `${product.description}`;
};

function cargarDatosEnModalPedido(productId, quantity) {
    let tablaPedido = document.getElementById("order-board");

    let product = JSON.parse(sessionStorage.getItem(productId));
    let orderButton = document.getElementById("order-confirm-button");
    let category;
    switch (product.category_id) {
        case 1:
            category = "Pizza"
            break;
        case 2:
            category = "Empanadas"
            break;
        case 4:
            category = "Porcion"
        default:
            break;
    }

    tablaPedido.innerHTML += `<p class="order__product">✔️${quantity} x ${category} ${product.name}.</p>
                             <p class="order__product__price">$${product.price}</p>`

    let totalCost = document.getElementById("total-order-cost");
    let actualCost = Number(totalCost.getAttribute("data-total"))
    totalCost.setAttribute("data-total", actualCost + (Number(product.price) * quantity))
    totalCost.innerHTML = "$ " + totalCost.getAttribute("data-total")

    let orderText = `${orderButton.getAttribute("data-order")}%20${quantity}%20x%20${category}%20${product.name},`
    orderButton.setAttribute("data-order", orderText)
}