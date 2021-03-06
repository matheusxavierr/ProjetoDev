const codeBlockTitle =
    '<h2>Pontos turísticos em alta!</h2>' + 
    '<div class="page-cards">' + 
    '</div>';
    document.querySelector("#cards").innerHTML = codeBlockTitle;


//NOME DEVE SER INCLUIDO CONFORME FOTO QUE FOR COLOCADA NA PASTA IMAGES/CARDS
const cardsList = [
    'Holambra - SP',
    'Pão de Açúcar - RJ',
    'Capitólio - MG', 
    'Vila Velha - ES', 
    'Olinda - PE',
    'Jericoacoara - CE', 
    'Ponte Hercílio Luz - SC',
    'Santarém - PA'
];
//FIRSTNAME LEVA A SECTION ESPECIFICA DA PÁG
//LASTNAME É O NOME DA PÁG DO ESTADO
const cardsListFirstName = [];
const cardsListLastName = [];

function loopCodeBlock(){
    for (i=0; i< cardsList.length; i++){
      
      cardsListFirstName[i] = cardsList[i].slice(0, -5);
      cardsListLastName[i] = cardsList[i].split(' ').pop();
      
        var codeBlock = '<div class="botton-card">' + 
                        '<figure class="card-image">' + 
                        `<a href="./${cardsListLastName[i]}.html#${cardsListFirstName[i]}"><img src="Images/cards/${cardsList[i]}.jpg" /> </a>` +
                        '</figure>' +
                        `<p>${cardsList[i]}</p>` +
                        '</div>';
                        document.querySelector(".page-cards").innerHTML += codeBlock;
                        
    }
};
 loopCodeBlock();