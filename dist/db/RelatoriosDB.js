import { relatoriosDB } from "../models/interfaces/relatorios";
//classe responsável por fazer as consultas no banco de dados
export default class RelatoriosDB {
    constructor() {
        this.relatoriosDB = relatoriosDB;
    }
    //receber todos os registros
    getRelatorios() {
        return relatoriosDB;
    }
    //Pesquisar por tipo: diário | semanal | mensal | anual
    getRelatoriosTipo(filtro = 'todos') {
        const registros = relatoriosDB.filter(relatorio => relatorio.tipo === filtro);
        return registros;
    }
    //Pesquisar por Ano
    getRelatoriosAno(ano = '') {
        const registros = relatoriosDB.filter(relatorio => relatorio.data === ano);
        return registros;
    }
    //Pesquisar por Nome
    getRelatoriosNome(nome = '') {
        const registros = relatoriosDB.filter(relatorio => relatorio.data === nome);
        return registros;
    }
    //Obter Relatório pelo código
    getRelatorioCod(cod = '') {
        const registros = relatoriosDB.filter(relatorio => relatorio.data === cod);
        return registros;
    }
    //Obter a quantidade de resgistros da tabela atual
    getQuantidadeTabelaAtual(resgistros) {
        return resgistros.length;
    }
    //orecebe dados já ordenados pelo codigo do banco de dados
    getRelatoriosCodOrdenados(ordemCrescente = true) {
        let registros = relatoriosDB.sort((a, b) => a.codRelatorio - b.codRelatorio);
        if (ordemCrescente) {
            return registros;
        }
        else {
            return registros.reverse();
        }
    }
    getRelatoriosDataOrdenados(maisRecentes = true) {
        let registros = relatoriosDB.sort((a, b) => a.dataHora.localeCompare(b.dataHora));
        if (maisRecentes) {
            return registros.reverse();
        }
        else {
            return registros;
        }
    }
}
