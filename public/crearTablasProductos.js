import {
    crearTarjetas
} from "./crearElementos.js";

export function crearTablas(id, url) {
    let tabla = document.getElementById(id)
    tabla.innerHTML = `<p>Cargando...</p>`;
    fetch(url)
        .then((r) => r.json())
        .then((data) => crearTarjetas(data.data, tabla))

}