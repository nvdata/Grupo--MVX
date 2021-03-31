import * as config from './modules/swiper__props.js'; //Configs do Swiper
import Dom from './modules/constructors.js'; //selecionar elementos
import menu from './modules/menu.js'; //js do menu
import * as animacao from './modules/animation.js';

menu(); //executa function do menu


// ★ PAGES ★
const pageHome = new Dom().el("#page__home")
const pageEmpresaMania = new Dom().el("#page__empresas")

function escopoPages() {

    if (pageHome) { // ★ HOME 

        //swipers
        new Dom().bodyClass("body__home")
        new Swiper(".swiper-container-1", config.props);
        new Swiper(".swiper-container-2", config.props);
        new Swiper(".swiper-container-fornecedores", config.props2);
        new Swiper(".swiper-container-transportadoras", config.props);

        // animação intro
        window.addEventListener("load", function () {
            if (document.body.classList.contains("dcl")) {
                animacao.animationIntro()
            }
        })
        //animação scroll
        animacao.animaAoScroll()

    } else if (pageEmpresaMania) { // ★ Empresas
        new Dom().bodyClass("body__empresas")
        animacao.animacaoCirculo()
        animacao.animacaoIntroEmpresas()
        animacao.animaAoScroll()
      
    }

}
escopoPages();



// Dom
//  .add("classe")  add class
//  .remove("classe")  remove class
//  .toggle("classe")  toggle class
//  .has("classe")  verifica class

//  .el() retorna elemento
//  .elements node list
//  .addClassAll("classe") class nodelist


//  .bodyClass("classe") add class no body
//  .bodyToggle("classe") Toggle class no body
//  .bodyRemove("classe") remove class no body