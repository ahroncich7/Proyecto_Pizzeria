export function crearTarjetaModal(product) {
    document.getElementById("carga-productos-img").src = product.url;
    document.getElementById("carga-productos-subtitle").textContent = `${product.nombre} ${product.precio}`;
    document.getElementById("carga-productos-descripcion").textContent = product.descripcion;
};

export function crearTarjeta(product, sectionElement) {
    let elementCard = `<div class="product__cards">
                            <img src=${product.url} alt="${product.nombre}" class="product__card__img">
                            <h3 class="product__card__subtitle">${product.nombre}</h3>
                        </div>`;
    sectionElement.innerHTML += elementCard;
};