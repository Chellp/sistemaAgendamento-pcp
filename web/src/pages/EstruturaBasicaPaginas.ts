import componentsPadraoHeader from "../components/padrao/componentsPadraoHeader"; const header = componentsPadraoHeader()
import componentsPadraoSidebar from "../components/padrao/componentsPadraoSidebar"; const sidebar = componentsPadraoSidebar();
import componentsPadraoSecMainPrincipal from "../components/padrao/componentsPadraoSecMainPrincipal"; 

//função para ser usada em cada pagina separadamente
export default class EstruturaBasicaPaginas{
    
    secMainPrincipal: string;

    constructor(pagina: string){
        this.secMainPrincipal = componentsPadraoSecMainPrincipal(pagina)
    }

    app = this.constAPP();

    private idApp(){
        return document.getElementById('app')
    }

    constAPP(){
        const app = this.idApp();
        if(!app){
            document.body.innerHTML = '<div id="app"></div>';
            console.log(document.body);
            return this.idApp()
        }
        return app
    }

    async montarHTML(){
        let app = this.constAPP();
        if(app){
            app.innerHTML += header
            app.innerHTML += sidebar
            app.innerHTML += this.secMainPrincipal
        }
        return app
    }
}