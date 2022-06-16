const acre = document.getElementById("state-ac");
const espiritoSanto = document.getElementById("state-es");
const rioDeJaneiro = document.getElementById("state-rj");
const saoPaulo = document.getElementById("state-sp");
const amazonas = document.getElementById("state-am");
const para = document.getElementById("state-pa");
const rioGrandeDoSul = document.getElementById("state-rs");

const image = document.getElementById("img");

//----------------------------- ACRE --------------------------------//
function mouseOverAcre() {
    image.classList.add("acre-hover");
}

function mouseOutAcre() {
    image.classList.remove("acre-hover");
}

//----------------------------- RIO DE JANEIRO --------------------------------//
function mouseOverRioJaneiro() {
    image.classList.add("rio-hover");
}

function mouseOutRioJaneiro() {
    image.classList.remove("rio-hover");
}

//----------------------------- SAO PAULO --------------------------------//
function mouseOverSaoPaulo() {
    image.classList.add("sao-paulo-hover");
}

function mouseOutSaoPaulo() {
    image.classList.remove("sao-paulo-hover");
}

//----------------------------- AMAZONAS --------------------------------//
function mouseOverAmazonas() {
    image.classList.add("amazonas-hover");
}

function mouseOutAmazonas() {
    image.classList.remove("amazonas-hover");
}

//----------------------------- PARA --------------------------------//
function mouseOverPara() {
    image.classList.add("para-hover");
}

function mouseOutPara() {
    image.classList.remove("para-hover");
}

//----------------------------- ESPIRITO SANTO --------------------------------//
function mouseOverEspiritoSanto() {
    image.classList.add("espirito-s-hover");
}

function mouseOutEspiritoSanto() {
    image.classList.remove("espirito-s-hover");
}

//----------------------------- RIO GRANDE DO SUL --------------------------------//
function mouseOverRioGrandeSul() {
    image.classList.add("rio-g-sul-hover");
}

function mouseOutRioGrandeSul() {
    image.classList.remove("rio-g-sul-hover");
}