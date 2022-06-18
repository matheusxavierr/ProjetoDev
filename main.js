const acre = document.getElementById("state-ac");
const espiritoSanto = document.getElementById("state-es");
const rioDeJaneiro = document.getElementById("state-rj");
const saoPaulo = document.getElementById("state-sp");
const amazonas = document.getElementById("state-am");
const para = document.getElementById("state-pa");
const rioGrandeDoSul = document.getElementById("state-rs");

let arrayStates = []
arrayStates.push(acre, amazonas, espiritoSanto, para, rioDeJaneiro, rioGrandeDoSul, saoPaulo)

const image = document.getElementById("img");

function mouseOverActiveImg() {
    arrayStates.forEach((element) => {
        if(element.id === event.target.id) {
            image.classList.add(event.target.id);
            return;
        }
    })
}

function mouseOutDisablesImg() {
    arrayStates.forEach((element) => {
        if(element.id === event.target.id) {
            image.classList.remove(event.target.id);
            return;
        }
    })
}