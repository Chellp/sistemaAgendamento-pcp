import ExameListaChegada from "../components/ExameListaChegada"; const examelistachegada = new ExameListaChegada();
import getDataHora from "../utils/getDataHora"; const getdatahora = new getDataHora()
import FiltrosHTMLComponent from "../components/FiltrosHTMLComponent";  const filtrosHTML = new FiltrosHTMLComponent()
import EstruturaTabela from "../models/EstruturaTabela"; 
import indexPage from "./PrincipalPage";


const estruturaTabela = new EstruturaTabela(['boletim', 'hora', 'nome completo', ''],'', 'todos-agendamentos', 'Hoje')

export default async function homePage(): Promise<string> {
    let conteudo: string = '';

    conteudo = `
    <section class="area-lista-chegada">${examesListaChegada()} ${tabela()}</section>
    `

    return indexPage(conteudo);
}

async function registros(){
    return ''
}

async function examesListaChegada() {
    const data: Date = getdatahora.dataHoraPadrao()
    examelistachegada.UlExameListaChegada(data)
    return examelistachegada;
}


async function tabela(titulo: string){
    const filtros: string = `${filtrosHTML.tipoPeriodo} ${filtrosHTML.ordenar}`
    return estruturaTabela.criarTabela(filtros, )
}