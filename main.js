//LIMPA FORMULÁRIO DE CONTATO APÓS ENVIO
window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }

const cardsList = [
    'São Paulo',
    'Rio de Janeiro',
    'Minas Gerais', 
    'Espírito Santo', 
    'Pernambuco',
    'Ceará', 
    'Santa Catarina',
    'Pará'
];
let cards = document.querySelector(".page-cards");

function loopCodeBlock(){
    for (i=0; i< cardsList.length; i++){
        var codeBlock = '<div class="botton-card">' + 
                        '<figure class="card-image">' + 
                        `<a href="./${cardsList[i]}.html"><img src="Images/cards/${cardsList[i]}.jpg" /> </a>` +
                        '</figure>' +
                        `<p>${cardsList[i]}</p>` +
                        '</div>';
                        document.querySelector(".page-cards").innerHTML += codeBlock;
                        
    }
};
 loopCodeBlock();
