
//função que anexa o html na área de visualização das tabelas
function carregarsecMainPrincipal(filtros: string, tabela: string) {
    const el: string = `
        <div class="area-tabela">
            <div class="titulo-filtros">
                <h1>Todos os Relatórios</h1>

                <div class="area-filtros">${filtros}</div><!-- .area-filtros -->
            </div> <!-- .titulo-filtros -->
            <table class="tabela-padrao" id="tabela-todos-relatorios">${tabela}</table>
        </div> <!-- .area-tabela -->

        <footer>
            <img src="../img/logo-black.png" alt="">
        </footer>
    `;

    return el
}

//função que anexa todo html da página caso ocorra algum erro na renderização da função renderizarsecMainPrincipal()
function telaBase(filtros: string, tabela: string) {

    const areaTabela: string = carregarsecMainPrincipal(filtros, tabela);

    const pagina: string = `
            <header class="navbar">
            <div class="logo-perfil">
                <a href="#" class="logo-header">
                    <img src="../img/logo.png" alt="">
                </a>
                <h1>Secretaria</h1>
            </div>
            <nav>
                <div class="input-pesquisa">
                    <select name="input-pesquisa" id="input-pesquisa">
                        <option value="exames" selected>exames</option>
                        <option value="paciente">exames</option>
                        <option value="nome">exames</option>
                        <option value="cpf">exames</option>
                        <option value="boletim">exames</option>
                    </select>

                    <div class="pesquisa">
                        <input type="text">
                        <img src="../img/icon/search-sharp.svg" alt="">
                    </div>
                </div>

                <ul class="links-navbar">
                    <li><img src="../img/icon/notifications-sharp-white.png" alt=""></li>
                    <li><img src="../img/icon/settings-sharp-white.png" alt=""></li>
                </ul>
            </nav>
        </header>

        <main class="main-principal">
            <ul class="sidebar">
                <li class="categoria-sidebar">
                    <ul>
                        <li class="item-principal">Agenda</li>
                        <li>Esta Semana</li>
                        <li>Este Mês</li>
                    </ul>
                </li>
                <li class="categoria-sidebar">
                    <ul>
                        <li class="item-principal">Todos os Exames</li>
                        <li>Concluídos</li>
                        <li>Pendentes</li>
                        <li>Cancelados</li>
                    </ul>
                </li>
                <li class="categoria-sidebar">
                    <ul>
                        <li class="item-principal">GDL</li>
                        <li>Encaminhar ao GDL</li>
                    </ul>
                </li>
                <li class="categoria-sidebar">
                    <ul>
                        <li class="item-principal">Todos os Relatórios</li>
                        <li>Diário</li>
                        <li>Mensal</li>
                        <li>Anual</li>
                    </ul>
                </li>
            </ul>

            <section class="sec-main-principal">${areaTabela}</section>
        </main>
    `;

    return pagina
}

//função que renderiza de forma parcial ou total a página solicitada
export default function renderizarsecMainPrincipal(renderizarTudo: boolean = true, el: string, filtros: string = '', tabela: string = '') {

    function funcaoRenderizarTudo() {
        const app = document.querySelector('#app')
        if (app) {
            app.innerHTML = telaBase(filtros, tabela)

        } else {
            console.log('Erro ao encontrar o elemento app');

        }
    }

    if (renderizarTudo) {

        try {
            let secMainPrincipal = document.querySelector('.sec-main-principal');

            if (secMainPrincipal) {
                //anexa o elemento se existir 'secMainPrincipal'
                secMainPrincipal.innerHTML = el;

            } else {
                //renderiza a tela inteira se nao encontrar o 'secMainPrincipal'
                funcaoRenderizarTudo()
                
            }

        } catch (error) {
            if (error instanceof Error) {
                console.error(`Erro ao tentar renderizar a tela: ${error.message}`);
            } else {
                console.error('Erro desconhecido');
            }
        }

        //caso seja explícito que queira renderizar a tela inteira
    } else {
        console.log('Erro ao renderizar');

    }

}