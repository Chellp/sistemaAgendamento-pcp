import componentsPadraoFooter from "./componentsPadraoFooter"; const footer = componentsPadraoFooter();

export default function componentsPadraoSecMainPrincipal(el: string){
    const principal = `<section class="sec-main-principal" id="html-sec-main-principal">${el} ${footer}</section>`

    return principal
}