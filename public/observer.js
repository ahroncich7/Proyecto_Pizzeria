export function observe() {
    observerBlur.observe(modal1, configBlur);
    observerBlur.observe(modal2, configBlur);
    observerBadge.observe(badge, configBadge);
}

function manejarBadge(elements) {
    let badge_element = elements[0].target
    console.log(elements)
    if (badge_element.innerHTML != "") {
        if (badge_element.classList.contains("oculto")) {
            badge_element.classList.remove("oculto")
        }
    } else {
        if (badge_element.innerHTML == "") {
            badge_element.classList.add("oculto")
        }
    }
}

function manejarBlur(elements) {
    let blureable = document.getElementById("blureable")
    if (!(elements[0].target.classList.contains("oculto"))) {
        blureable.classList.add("blureable")
    } else {
        blureable.classList.remove("blureable")
    }
}

let configBlur = {
    attributes: true
}

let configBadge = {
    childList: true
}

let observerBlur = new MutationObserver(manejarBlur);
let observerBadge = new MutationObserver(manejarBadge);
let modal1 = document.getElementById("add-to-order-window");
let modal2 = document.getElementById("order-window");
let badge = document.getElementById("badge");