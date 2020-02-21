// JavaScript Document

function gaaFremad() {
    if (billedIndeks < billedliste.length - 1) {
        billedIndeks++;
    } else {
        billedIndeks = 0;
    }

    document.getElementById("slidebillede").src = billedliste[billedIndeks];
}

function gaaTilbage() {
    if (billedIndeks > 0) {
        billedIndeks--;
    } else {
        billedIndeks = 2;
    }

    document.getElementById("slidebillede").src = billedliste[billedIndeks];
}

// ------- Hovedprogram ---------
const billedliste = ["images/slide1.jpg", "images/slide2.jpg", "loevepar.jpg"];
let billedIndeks = 0;

document.getElementById("frem").addEventListener("click", function () {
    gaaFremad();
})

document.getElementById("tilbage").addEventListener("click", function () {
    gaaTilbage();
})
