const btnScrollToTop = document.querySelector(".btnScrollToTop");
const btnWhats = document.querySelector(".zap");

btnScrollToTop.addEventListener("click", e => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});


window.addEventListener('scroll', e => {
  btnScrollToTop.style.display = window.scrollY > 20 ? 'block' : 'none';
});

window.addEventListener('scroll', e => {
  btnWhats.style.display = window.scrollY > 20 ? 'block' : 'none';
});