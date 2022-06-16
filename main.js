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



//----------------------------- ACRE --------------------------------//
function mouseOverActiveImg() {
    if(event.target.id === 'state-ac') {
        image.classList.add("acre-hover");
        return;
    }
    if(event.target.id === 'state-am') {
        image.classList.add("amazonas-hover");
        return;
    }
    if(event.target.id === 'state-es') {
        image.classList.add("espirito-s-hover");
        return;
    }
    if(event.target.id === 'state-pa') {
        image.classList.add("para-hover");
        return;
    }
    if(event.target.id === 'state-rj') {
        image.classList.add("rio-hover");
        return;
    }
    if(event.target.id === 'state-rs') {
        image.classList.add("rio-g-sul-hover");
        return;
    }
    if(event.target.id === 'state-sp') {
        image.classList.add("sao-paulo-hover");
        return;
    }
    
    
}

function mouseOutDisablesImg() {
    if(event.target.id === 'state-ac') {
        image.classList.remove("acre-hover");
        return;
    }
    if(event.target.id === 'state-am') {
        image.classList.remove("amazonas-hover");
        return;
    }
    if(event.target.id === 'state-es') {
        image.classList.remove("espirito-s-hover");
        return;
    }
    if(event.target.id === 'state-pa') {
        image.classList.remove("para-hover");
        return;
    }
    if(event.target.id === 'state-rj') {
        image.classList.remove("rio-hover");
        return;
    }
    if(event.target.id === 'state-rs') {
        image.classList.remove("rio-g-sul-hover");
        return;
    }
    if(event.target.id === 'state-sp') {
        image.classList.remove("sao-paulo-hover");
        return;
    }
    
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