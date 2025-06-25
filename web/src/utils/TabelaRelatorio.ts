import RelatoriosDB from "../../../backend/src/repositories/RelatoriosDB";

//classe para renderizar e organizar os registros da tabela relatorio
export default class TabelaRelatorio {

    relatoriosDB = new RelatoriosDB();

    relatoriosDiarios() {
        return this.relatoriosDB.getRelatoriosTipo('diario');
    }

    relatoriosSemanais() {
        return this.relatoriosDB.getRelatoriosTipo('semanal');
    }

    relatoriosMensais() {
        return this.relatoriosDB.getRelatoriosTipo('mensal');
    }

    relatoriosAnuais() {
        return this.relatoriosDB.getRelatoriosTipo('anual');
    }

    ordenarMaisRecente() {
        return this.relatoriosDB.getRelatoriosDataOrdenados()
    }

    ordenarMaisAntigo() {
        return this.relatoriosDB.getRelatoriosDataOrdenados(false)
    }

    ordenarCodCrescente() {
        return this.relatoriosDB.getRelatoriosCodOrdenados()
    }

    ordenarCodDecrescente() {
        return this.relatoriosDB.getRelatoriosCodOrdenados(false)
    }

}