import componentsPadraoHeader from "../shared/components/padrao/componentsPadraoHeader"; const header = componentsPadraoHeader()
import componentsPadraoSidebar from "../shared/components/padrao/componentsPadraoSidebar"; const sidebar = componentsPadraoSidebar();
import componentsPadraoSecMainPrincipal from "../shared/components/padrao/componentsPadraoSecMainPrincipal"; 

//função para ser usada em cada pagina separadamente
export default class EstruturaBasicaPaginas{
    
    secMainPrincipal: string;

    constructor(pagina: string){
        this.secMainPrincipal = componentsPadraoSecMainPrincipal(pagina)
    }

    app = this.constAPP();

    private idApp(){
        return document.getElementById('root')
    }

    constAPP(){
        const app = this.idApp();
        if(!app){
            document.body.innerHTML = '<div id="root"></div>';
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