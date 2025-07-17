import FiltrosHTMLComponent from "../shared/components/FiltrosHTMLComponent"; const filtrosHTML = new FiltrosHTMLComponent()
import ExameListaChegada from "../shared/components/ExameListaChegada";
import AgendamentoAPI from "../shared/services/api/agendamentoAPI"; const agApi = new AgendamentoAPI()
import EstruturaBasicaPaginas from "./EstruturaBasicaPaginas";
import RenderizarTabelas from "../shared/components/tabelas/RenderizarTabelas";

export default async function PrincipalPage(){
    let conteudo: string = await ExameListaChegada(await agApi.getInfoCompleta())
    return conteudo;
}

async function tabela(){
    const titulo = 'Hoje'
    const idTabela = 'agendamentos-hoje'
    const headTabela: string[] = ['Boletim', 'Hora', 'Nome Completo', 'Status', ''];
    const filtros: string[] = [filtrosHTML.periodo('relatorios'), filtrosHTML.ordenar('relatorios')]

}