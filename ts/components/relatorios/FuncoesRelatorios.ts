import { periodo as filtroPeriodo } from '../filtros/filtros';
import { ordenar as filtroOrdenar} from '../filtros/filtros';
import EstruturaTabela from '../tabelas/EstruturaTabela';


export default class FuncoesRelatorios{
    
    //Elementos padrão de qualquer tabela de relatório
    headTabela: string[] = ['data', 'hora', 'relatório', 'tipo', ''];

    gerarTabelaRelatorio(nomeTabela: string, titulo: string){

    //adicionado elementos específicos para cada tipo de tabela de relatório
    //nomeTabela = nome da tabela no banco de dados
    const tabela = new EstruturaTabela(this.headTabela, 'relatorio', nomeTabela, titulo);

    const filtros: string[] = [filtroPeriodo('relatorio'), filtroOrdenar('relatorio')]
    return tabela.criarTabela(filtros);
    
    }

    carregarRelatoriosDiarios(qtdRegistros: number = 10){

    }
}