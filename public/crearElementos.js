import {
    mostrarModalAgregarAlPedido
} from "./visibilidadElementos.js";

export function crearModalAgregarAlPedido(product) {
    document.getElementById("carga-productos-img").src = `./images/cat${product.category_id}id${product.id}.jpg`;
    document.getElementById("carga-productos-subtitle").textContent = `${product.name} ${product.price}`;
    document.getElementById("carga-productos-descripcion").textContent = `${product.description}`;
    mostrarModalAgregarAlPedido();
};

export function crearTarjetas(products, sectionElement) {
    let elementCard = ""
    console.log(Object.keys(products).length)
    products.forEach(product => {
        elementCard += `<div class="product__cards">
                            <img src=${product.picture}  alt="${product.name}" class="product__card__img">
                            <h3 class="product__card__subtitle">${product.name}</h3>
                        </div>`
    });

    sectionElement.innerHTML = elementCard;
};