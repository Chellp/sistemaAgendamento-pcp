import EstruturaBasicaPaginas from "../pages/EstruturaBasicaPaginas"; const pagina = new EstruturaBasicaPaginas('')
import PrincipalPage from "../pages/PrincipalPage";

const routes: any = {
    '/home': 'Principal',
    '/agendamentos': 'Agendamentos',
    '/agendamentos/hoje': 'Agendamentos-hoje',
    '/agendamentos/essa-semana': 'Agendamentos-essa-semana',
    '/agendamentos/esse-mes': 'Agendamentos-esse-mes',
    '/agendamentos/status/concluido': 'Agendamentos-concluidos',
    '/agendamentos/status/pendente': 'Agendamentos-pendente',
    '/agendamentos/status/cancelado': 'Agendamentos-cancelado',
    '/unidade': 'Unidade'
}

async function carregarPaginas() {
    const path = window.location.pathname; //caminho atual
    const pageName = routes[path] || 'Principal';
    let app = pagina.constAPP()

    if (app) {

        switch (pageName) {
            case 'Agendamentos':
                app.innerHTML = 'pagina agend'
                break;
            case 'Agendamentos-hoje':
                app.innerHTML = 'pagina agend'
                break;
            case 'Agendamentos-essa-semana':
                app.innerHTML = 'pagina agend'
                break;
            case 'Agendamentos-esse-mes':
                app.innerHTML = 'pagina agend'
                break;


            default:
                app.innerHTML = await PrincipalPage()
                break;
        }


    }
}

export const navegarPara = (path: string) => {
    window.history.pushState({}, '', path);
    carregarPaginas()
}

window.addEventListener('popstate', carregarPaginas);
document.addEventListener('DOMContentLoaded', carregarPaginas)