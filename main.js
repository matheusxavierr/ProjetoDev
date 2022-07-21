//LIMPA FORMULÁRIO DE CONTATO APÓS ENVIO
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};

//------------botões topo e whats -----------------

const codeBlockBtns =
    '<div class="zap">' +
    '<a href="  https://wa.me/5581988693599?text=Caso+deseje%2c+voc%c3%aa+pode+entrar+em+contato+com+os+desenvolvedores+pelo+link%3a+https%3a%2f%2fchat.whatsapp.com%2fHyodbsnQo6T4AHjbqDxAnf" target="_blank">' +
    '<img id="whats" src="./Images/icons/whatsapp-icon.png" alt="Fale Conosco pelo Whatsapp" title="Fale Conosco pelo Whatsapp">' +
    "</a>" +
    "</div>" +
    '<div class="btnScrollToTop" data-scroll="up" type="button">' +
    '<i class="fa-solid fa-circle-arrow-up" id="icon-btn"></i>' +
    "</div>";
document.querySelector("#btnsWhatsTop").innerHTML = codeBlockBtns;

//-----------------FOOTER-----------------

var codeBlockFooter =
    '<section id="footer-content">' +
    '<div class="media-content">' +
    '<div id="logo-style" class="text-justify">' +
    '<img id="logo-tipo" src="./assets/logo-footer.png">' +
    "</div>" +
    "<p>Ficamos felizes de ver você aqui!</p>" +
    "<span>Deixe uma mensagem, sua opnião é muito importante pra nós! </span><br>" +
    "<span>Acompanhe as nossas redes sociais!</span>" +
    "<figure>" +
    '<a href="#"><img src="./Images/icons/facebook-icon.png" class="icons-media"></a>' +
    '<a href="#"><img src="./Images/icons/twitter-icon.png" class="icons-media"></a>' +
    '<a href="#"><img src="./Images/icons/linkedin-icon.png" class="icons-media"></a>' +
    '<a href="#"><img src="./Images/icons/youtube-icon.png" class="icons-media"></a>' +
    "</figure>" +
    '<span>Conheça mais sobre o projeto acessando o <a href="https://github.com/matheusxavierr/ProjetoDev" target="_blank">Git Hub</a></span><br>' +
    '<span>Conheça a <a href="./team.html">Equipe TechTeam</a></span>' +
    "</div>" +
    '<div class="contact">' +
    "<span>Conte o que você achou do site! Fale sobre sua visita a um dos lugares turísticos ou deixe-nos sugestões para melhorar! Queremos ouvir sua opnião!</span>" +
    '<form action="https://formspree.io/f/xvolekkv" id="contact-form" method="POST">' +
    '<label for="name">Nome:</label>' +
    '<input class="form-contact" type="text" id="name" placeholder="Nome Completo" name="name" required>' +
    "<br>" +
    '<label for="email">E-mail:</label>' +
    '<input class="form-contact" type="email" id="mail" placeholder="exemplo@email.com" name="email" required>' +
    '<textarea class="form-contact" name="msg" id="message" rows="5" placeholder="Mensagem" required></textarea><br>' +
    '<input id="submit-contact" type="submit" value="Enviar">' +
    "</form>" +
    "</div>" +
    "</section>";
document.querySelector("#footerJS").innerHTML = codeBlockFooter;