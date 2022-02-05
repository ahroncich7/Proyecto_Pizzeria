export function observe(ejecutar) {
    setTimeout(() => {
        manejarBadge()
        checkear()
    }, 1)
}

function manejarBadge() {
    let badge = document.getElementById("badge");
    if (badge.innerHTML != "") {
        badge.classList.remove("oculto")
    } else {
        badge.classList.add("oculto")
    }
}