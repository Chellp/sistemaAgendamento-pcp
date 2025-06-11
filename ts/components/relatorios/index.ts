import { periodo as filtroPeriodo } from '../filtros/filtros';
import { ordenar as filtroOrdenar} from '../filtros/filtros';
import EstruturaTabela from '../tabelas/EstruturaTabela';

//Elementos padrão de qualquer tabela de relatório
const headTabela: Array<string> = ['data', 'hora', 'relatório', 'tipo', ''];

export default function tabelaRelatorio(nomeTabela: string, titulo: string){

    //adicionado elementos específicos para cada tipo de tabela de relatório
    //nomeTabela = nome da tabela no banco de dados
    const tabela = new EstruturaTabela(headTabela, 'relatorio', nomeTabela, titulo);

    const filtros: string[] = [filtroPeriodo('relatorio'), filtroOrdenar('relatorio')]
    return tabela.criarTabela(filtros);
    
}


console.log(tabelaRelatorio('relatorio', 'titulo'));


/*
    Opção para mudar tabela de relatório
    modificar: titulo, linhas da tabela
*/

