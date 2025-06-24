import { periodo as filtroPeriodo } from './filtros';
import { ordenar as filtroOrdenar } from './filtros';
import EstruturaTabela from 'utils/EstruturaTabela';
import RelatoriosDB from 'db/RelatoriosDB';
export default class RenderizarTabelasRelatorio {
    constructor() {
        this.registros = [];
        this.relatoriosDB = new RelatoriosDB();
        //Elementos padrão de qualquer tabela de relatório
        this.headTabela = ['data', 'hora', 'relatórios', 'tipo', ''];
        this.filtros = [filtroPeriodo('relatorios'), filtroOrdenar('relatorios')];
        this.tipoTabela = 'relatorios';
    }
    //método que recebe a lista de registros
    anexarRegistros(registros) {
        return this.registros = registros;
    }
    receberRegistrosTipo(tipo) {
        if (tipo === 'todos') {
            this.registros = this.anexarRegistros(this.relatoriosDB.getRelatorios());
        }
        else {
            this.registros = this.anexarRegistros(this.relatoriosDB.getRelatoriosTipo(tipo));
        }
    }
    gerarTabelaRelatorio(nomeTabela, titulo) {
        //adicionado elementos específicos para cada tipo de tabela de relatório
        //nomeTabela = para anexar nos IDs
        const tabela = new EstruturaTabela(this.headTabela, this.tipoTabela, `${this.tipoTabela}-${nomeTabela}`, titulo);
        this.receberRegistrosTipo(nomeTabela);
        return tabela.criarTabela(this.filtros, this.registros);
    }
}
