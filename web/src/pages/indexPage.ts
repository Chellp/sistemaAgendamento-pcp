import Header from "../components/padrao/Header";
import Sidebar from "../components/padrao/Sidebar";
import Footer from "../components/padrao/Footer";

export default function indexPage(elemento: string): string{
    let conteudo: string ='';

    conteudo = `
        <div id="app">${Header()}
        <section class="sec-main-principal" id="html-sec-main-principal">
            ${Sidebar()} ${elemento} ${Footer()}
        </section>
        </div>
    `
    return conteudo;
}