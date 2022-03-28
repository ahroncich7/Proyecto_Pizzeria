export function guardarProductosSessionStorage(products) {
    products.forEach(element => {
        element.category_id = setCategory(element)
        sessionStorage.setItem(element.id, JSON.stringify(element))
    })
}

function setCategory(product) {
    switch (product.category_id) {
        case 1:
            return "Pizza"
            break;
        case 2:
            return "Empanadas"
            break;
        case 4:
            return "Porcion"
        default:
            break;
    }
}