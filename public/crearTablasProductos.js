import {
    crearTarjetas
} from "./crearElementos.js";

export function crearTablas(id, url) {
    let tabla = document.getElementById(id)
    tabla.innerHTML = `<p>Cargando...</p>`;
    return fetch(url)
        .then((r) => r.json())
        .then((data) => crearTarjetas(data.data, tabla))
        .then((r) => r)
        .catch((error) => console.log(error))
}