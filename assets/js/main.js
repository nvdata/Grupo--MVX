// import animacaoHome from './modules/animation.js'; //animacao full scroll da home
import * as config from './modules/swiper__props.js'; //Configs do Swiper
import Dom from './modules/constructors.js'; //selecionar elementos e gerenciar classes
import menu from './modules/menu.js'; //js do menu
// import result from "./modules/detect-browser.js";


menu(); //executa function do menu


// PAGINAS
const pageHome = new Dom().el("#page__home")



//escopo de cada page
function escopoPages() {

    if (pageHome) { //page HOME
        new Dom().bodyClass("body__home")
        new Swiper(".swiper-container-1", config.props);
        new Swiper(".swiper-container-2", config.props);

    }
    //  else if (pageEmpresa) { //page EMPRESA
    //     new Dom().bodyClass("body__empresa")

    // } 

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