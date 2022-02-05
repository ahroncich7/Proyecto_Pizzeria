export function observe(ejecutar) {
    setTimeout(() => {
        manejarBadge()
        manejarBlur()
        observe()
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

function manejarBlur() {
    let blureable = document.getElementById("blureable");
    let modal1 = document.getElementById("add_to_order_window");
    let modal2 = document.getElementById("order_window");

    if (!modal1.classList.contains("oculto") || !modal2.classList.contains("oculto")) {
        blureable.classList.add("blureable")
    } else {
        if (blureable.classList.contains("blureable")) {
            blureable.classList.remove("blureable")
        }

    }
};