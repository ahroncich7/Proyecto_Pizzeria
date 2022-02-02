const URL_BASE = "https://laomingcode-node-mysql.herokuapp.com/api/product/category/";

export async function obtenerProductosDeAPI(catId) {
    return fetch(`${URL_BASE}${catId}`)
        .then(r => r.json())
        .then(r => r.data)
}