import RenderizarTabelasRelatorio from "components/tabelasRelatorio";
import { InterfaceRegistros } from "models/interfaces";
import TabelaRelatorio from "./TabelaRelatorio";

const renderizarRelatorios = new RenderizarTabelasRelatorio();

//classe com métodos para anexar escutadores de evento
export default class AnexarEventos {

    //inserir valor padrao do id
    agendamentosTodos(idElemento: string = 'categoria-sidebar-agenda-todos') {

        const elemento = document.querySelector(`${idElemento}`);

        if (elemento) {
            elemento.addEventListener('click', () => {
                console.log(elemento);
            })
        }

    }

    agendamentosHoje(idElemento: string = 'categoria-sidebar-agenda-hoje') {
        const elemento = document.querySelector(`${idElemento}`);

        if (elemento) {
            elemento.addEventListener('click', () => {

            })
        }
    }

    agendamentosSemana(idElemento: string = 'categoria-sidebar-agenda-semana') {
        const elemento = document.querySelector(`${idElemento}`);

        if (elemento) {
            elemento.addEventListener('click', () => {

            })
        }
    }

    agendamentosMes(idElemento: string = 'categoria-sidebar-agenda-mes') {
        const elemento = document.querySelector(`${idElemento}`);

        if (elemento) {
            elemento.addEventListener('click', () => {

            })
        }
    }

    examesTodos(idElemento: string = 'categoria-sidebar-exames-todos') {
        const elemento = document.querySelector(`${idElemento}`);

        if (elemento) {
            elemento.addEventListener('click', () => {

            })
        }
    }

    examesConcluidos(idElemento: string = 'categoria-sidebar-exames-concluidos') {
        const elemento = document.querySelector(`${idElemento}`);

        if (elemento) {
            elemento.addEventListener('click', () => {

            })
        }
    }

    examesPendentes(idElemento: string = 'categoria-sidebar-exames-pendentes') {
        const elemento = document.querySelector(`${idElemento}`);

        if (elemento) {
            elemento.addEventListener('click', () => {

            })
        }
    }

    examesCancelados(idElemento: string = 'categoria-sidebar-exames-cancelados') {
        const elemento = document.querySelector(`${idElemento}`);

        if (elemento) {
            elemento.addEventListener('click', () => {

            })
        }
    }

    gdlTodos(idElemento: string = 'categoria-sidebar-gdl-todos') {
        const elemento = document.querySelector(`${idElemento}`);

        if (elemento) {
            elemento.addEventListener('click', () => {

            })
        }
    }

    gdlEncaminhar(idElemento: string = 'categoria-sidebar-gdl-encaminhar') {
        const elemento = document.querySelector(`${idElemento}`);

        if (elemento) {
            elemento.addEventListener('click', () => {

            })
        }
    }

    relatoriosTodos(idElemento: string = 'categoria-sidebar-relatorios-todos') {
        const elemento = document.querySelector(`${idElemento}`);

        if (elemento) {
            elemento.addEventListener('click', () => {
                renderizarRelatorios.gerarTabelaRelatorio('todos', 'Todos os Relatórios');
            })
        }
    }

    relatoriosDiario(idElemento: string = 'categoria-sidebar-relatorios-diario') {
        const elemento = document.querySelector(`${idElemento}`);

        if (elemento) {
            elemento.addEventListener('click', () => {
                renderizarRelatorios.gerarTabelaRelatorio('todos', 'Todos os Relatórios');
            })
        }
    }

    relatoriosSemanal(idElemento: string = 'categoria-sidebar-relatorios-semanal') {
        const elemento = document.querySelector(`${idElemento}`);

        alert('ok')

        if (elemento) {
            elemento.addEventListener('click', () => {
                renderizarRelatorios.gerarTabelaRelatorio('semanal', 'Todos os Relatórios');
            })
        }
    }

    relatoriosMensal(idElemento: string = 'categoria-sidebar-relatorios-mensal') {
        const elemento = document.querySelector(`${idElemento}`);

        if (elemento) {
            elemento.addEventListener('click', () => {
                renderizarRelatorios.gerarTabelaRelatorio('mensal', 'Todos os Relatórios');
            })
        }
    }

    relatoriosAnual(idElemento: string = 'categoria-sidebar-relatorios-anual') {
        const elemento = document.querySelector(`${idElemento}`);

        if (elemento) {
            elemento.addEventListener('click', () => {
                renderizarRelatorios.gerarTabelaRelatorio('anual', 'Todos os Relatórios');
            })
        }
    }

    eventosPadraoSidebar() {
        this.agendamentosTodos(); this.agendamentosHoje(); this.agendamentosSemana(); this.agendamentosMes();
        this.examesTodos(); this.examesConcluidos(); this.examesPendentes(); this.examesCancelados();
        this.gdlTodos(); this.gdlEncaminhar();
        this.relatoriosDiario(); this.relatoriosSemanal(); this.relatoriosAnual();
    }

}