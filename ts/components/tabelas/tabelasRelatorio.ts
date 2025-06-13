import { periodo as filtroPeriodo } from '../filtros/filtros';
import { ordenar as filtroOrdenar } from '../filtros/filtros';
import EstruturaTabela from './EstruturaTabela';
import { InterfaceRegistros } from '../../models/interfaces';
import RelatoriosDB from '../../db/RelatoriosDB';


export default class RenderizarTabelasRelatorio {

    registros: InterfaceRegistros[] = [];

    //Elementos padrão de qualquer tabela de relatório
    headTabela: string[] = ['data', 'hora', 'relatórios', 'tipo', ''];
    filtros: string[] = [filtroPeriodo('relatorios'), filtroOrdenar('relatorios')]
    tipoTabela: string = 'relatorios';

    enviarRegistros(registros: InterfaceRegistros[]){
        this.registros = registros;
    }

    anexarRegistros(tipo: string){
        if(tipo === 'todos'){

        }
    }

    gerarTabelaRelatorio(nomeTabela: string, titulo: string) {

        //adicionado elementos específicos para cada tipo de tabela de relatório
        //nomeTabela = para anexar nos IDs
        const tabela = new EstruturaTabela(this.headTabela, this.tipoTabela, `${this.tipoTabela}-${nomeTabela}`, titulo);
    }

}