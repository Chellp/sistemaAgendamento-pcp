import { periodo as filtroPeriodo } from './filtros';
import { ordenar as filtroOrdenar } from './filtros';
import EstruturaTabela from 'utils/EstruturaTabela';
import { InterfaceRegistros } from 'models/interfaces';
import RelatoriosDB from 'db/RelatoriosDB';
import { InterfaceRelatorio } from 'models/interfaces/relatorios';

export default class RenderizarTabelasRelatorio {

    registros: InterfaceRegistros[] = [];
    relatoriosDB = new RelatoriosDB()

    //Elementos padrão de qualquer tabela de relatório
    headTabela: string[] = ['data', 'hora', 'relatórios', 'tipo', ''];
    filtros: string[] = [filtroPeriodo('relatorios'), filtroOrdenar('relatorios')]
    tipoTabela: string = 'relatorios';

    //método que recebe a lista de registros
    anexarRegistros(registros: InterfaceRegistros[]){
        return this.registros = registros;
    }

    receberRegistrosTipo(tipo: string){
        if(tipo === 'todos'){
            this.registros = this.anexarRegistros(this.relatoriosDB.getRelatorios());
        } else {
            this.registros = this.anexarRegistros(this.relatoriosDB.getRelatoriosTipo(tipo))
        }
    }

    gerarTabelaRelatorio(nomeTabela: string, titulo: string) {

        //adicionado elementos específicos para cada tipo de tabela de relatório
        //nomeTabela = para anexar nos IDs
        const tabela = new EstruturaTabela(this.headTabela, this.tipoTabela, `${this.tipoTabela}-${nomeTabela}`, titulo);

        this.receberRegistrosTipo(nomeTabela)
        return tabela.criarTabela(this.filtros, this.registros);

    }

}