export function crearTarjetaModal(product) {
    document.getElementById("carga-productos-img").src = product.url;
    document.getElementById("carga-productos-subtitle").textContent = `${product.nombre} ${product.precio}`;
    document.getElementById("carga-productos-descripcion").textContent = product.descripcion;
};

export function crearTarjetas(products, sectionElement) {
    let elementCard = "";
    products.forEach(element => {
        elementCard += `<div class="product__cards">
                            <img src=${element.url} alt="${element.nombre}" class="product__card__img">
                            <h3 class="product__card__subtitle">${element.nombre}</h3>
                        </div>`
    });

    sectionElement.innerHTML = elementCard;
};