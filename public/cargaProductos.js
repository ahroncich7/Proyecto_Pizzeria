export function crearTarjetaModal(product) {
    document.getElementById("modal_img").src = product.url;
    document.getElementById("modal_subtitle").textContent = `${product.nombre} ${product.precio}`;
    document.getElementById("modal_descripcion").textContent = product.descripcion;
};

export function crearTarjeta(product, sectionElement) {
    let elementCard = `<div class="product__cards">
                            <img src=${product.url} alt="${product.nombre}" class="product__card__img">
                            <h3 class="product__card__subtitle">${product.nombre}</h3>
                        </div>`;
    sectionElement.innerHTML += elementCard;
};