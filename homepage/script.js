
/*função botao menu */

let btn = document.getElementById("menuMobile");

function changeToggle () {
  
  let btnNav = document.getElementById("menuMobile");
  btnNav.classList.toggle('active');
  
}

/*Animação botão */

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});  



