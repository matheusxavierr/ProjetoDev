//Criando array pra receber imagens do Carrossel
imgs = document.querySelectorAll(".carousel-images img");

// controladores de troca de imagem

let tempo = 4000;
let imgAtiva = 0;
const maxImg = imgs.length - 1;


//Função que realiza a troca de imagens automaticamente
function inicia (){       
    setInterval(() => {
        trocaImg(1)}, tempo
    )
    
}


function trocaImg(dir){
    tempo = 0;
    imgs[imgAtiva].classList.remove("active");
    imgAtiva += Number(dir);
    if (imgAtiva > maxImg){
        imgAtiva = 0;
    } else if (imgAtiva < 0){
        imgAtiva = maxImg;
    }
    imgs[imgAtiva].classList.add("active");

}

//Chmando função de troca automatica de imagens 
//quando a página é carregada


window.addEventListener("load", inicia);
