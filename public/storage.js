export function guardarProductosSessionStorage(products) {
    products.forEach(element => {
        sessionStorage.setItem(element.id, JSON.stringify(element))
    })
}