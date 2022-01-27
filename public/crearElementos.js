export function crearTarjetaModal(product) {
    document.getElementById("carga-productos-img").src = `./images/cat${product.category_id}id${product.id}.jpg`;
    document.getElementById("carga-productos-subtitle").textContent = `${product.name} ${product.price}`;
    document.getElementById("carga-productos-descripcion").textContent = `${product.description}`;
};

export function crearTarjetas(products, sectionElement) {
    let elementCard = ""
    products.forEach(product => {
        elementCard += `<div class="product__cards">
                            <img src= ./images/cat${product.category_id}id${product.id}.jpg alt="${product.name}" class="product__card__img">
                            <h3 class="product__card__subtitle">${product.name}</h3>
                        </div>`
    });

    sectionElement.innerHTML = elementCard;
};

export function mostrarTarjetaModal() {
    document.querySelector(".modal").classList.remove("oculto");
}