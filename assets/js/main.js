import * as config from './modules/swiper__props.js'; //Configs do Swiper
import Dom from './modules/constructors.js'; //selecionar elementos
import menu from './modules/menu.js'; //js do menu
import * as animacao from './modules/animation.js';
import * as carouselClick from './modules/carousel-change.js';
import vemBootstrap from './modules/botstrapimport.js';

menu(); //executa function do menu


// ★ PAGES ★
const pageHome = new Dom().el("#page__home")
const pageEmpresas = new Dom().el("#page__empresas")
const pageContato = new Dom().el("#page__contato")
const pageSejaMVX = new Dom().el("#page__sejamvx")
const pageGrupo = new Dom().el("#page__grupomvx")

//empresas variantes
const pageEmpresasVariante1 = new Dom().el(".variante__1")

const pages = {
    pageHome,
    pageEmpresas,
    pageContato,
    pageSejaMVX,
    pageGrupo
}

function escopoPages() {

    if (pageHome) { // ★ HOME 
        //swipers
        new Dom().bodyClass("body__home")
        const swiper1 = new Swiper(".swiper-container-1", config.props);

        new Swiper(".swiper-container-2", config.props);
        new Swiper(".swiper-container-3", config.props);
        new Swiper(".swiper-container-4", config.props);
        new Swiper(".swiper-container-5", config.props);
        new Swiper(".swiper-container-fornecedores", config.props2);
        new Swiper(".swiper-container-transportadoras", config.propstrans);

        console.log(swiper1);

        // animação intro
        window.addEventListener("load", function () {
            if (document.body.classList.contains("dcl")) {
                animacao.animationIntro()
            }
        })
        animacao.animaAoScroll()
        carouselClick.carouselMuda()


    } else if (pageEmpresas) { // ★ Empresas
        new Dom().bodyClass("body__empresas")
        animacao.animacaoCirculo()
        animacao.animacaoIntroEmpresas()
        animacao.animaAoScroll()

        if (pageEmpresasVariante1) {
            new Dom().bodyClass("body__variante-1")
            new Swiper(".swiper-container-1", config.props);

        }

    } else if (pageContato) { // ★ Contato
        new Dom().bodyClass("body__contato")
        animacao.animaContato()

    } else if (pageSejaMVX) {
        new Dom().bodyClass("body__sejamvx")
        vemBootstrap()

    } else if (pageGrupo) {
        new Dom().bodyClass("body__grupomvx")
        animacao.animaAoScroll()
        carouselClick.clickChange()
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