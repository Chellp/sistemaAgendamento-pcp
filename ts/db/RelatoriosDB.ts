import { Relatorio, relatoriosDB } from "./relatorios";

export default class RelatoriosDB {

    relatoriosDB: Relatorio[] = relatoriosDB;

    //Pesquisar por tipo: diário | semanal | mensal | anual
    getRelatoriosTipo(filtro: string = 'todos') {
        const registros = relatoriosDB.filter(relatorio => relatorio.tipo === filtro);
        return registros;
    }

    //Pesquisar por Ano
    getRelatoriosAno(ano: string = '') {
        const registros = relatoriosDB.filter(relatorio => relatorio.data === ano);
        return registros;
    }

    //Pesquisar por Nome
    getRelatoriosNome(nome: string = '') {
        const registros = relatoriosDB.filter(relatorio => relatorio.data === nome);
        return registros;
    }

    //Obter Relatório pelo código
    getRelatorioCod(cod: string = '') {
        const registros = relatoriosDB.filter(relatorio => relatorio.data === cod);
        return registros;
    }

    //Obter a quantidade de resgistros da tabela atual
    getQuantidadeTabelaAtual(resgistros: Array<object>){
        return resgistros.length
    }

}