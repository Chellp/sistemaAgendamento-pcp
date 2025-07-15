import EstruturaTabela from '../../models/EstruturaTabela';


export default class RenderizarTabelas {

    //Elementos padrão de qualquer tabela
    registros: any[] = []

    headTabela: string[]
    filtros: string[]
    idTabela: string
    titulo: string

    constructor(idTabela: string, titulo: string, headTabela: string[], filtros: string[]) {
        this.idTabela = idTabela
        this.titulo = titulo
        this.headTabela = headTabela
        this.filtros = filtros
    }

    //método que recebe a lista de registros
    anexarRegistros(registros: any[]) {
        return this.registros = registros;
    }

    atualizarRegistros(registros: any[] = this.registros): string {
        return this.gerarTabelaRelatorio(registros)
    }

    private instanciarTabela(idTabela: string = this.idTabela, titulo: string = this.titulo) {

        if (idTabela === '') {
            idTabela = this.idTabela
        }

        if (idTabela === '') {
            titulo = this.titulo
        }

        const tabela = new EstruturaTabela(this.headTabela, idTabela, titulo);
        return tabela
    }

    gerarTabelaRelatorio(registros: any[] = this.registros): string {
        const tabela = this.instanciarTabela('', '')
        return tabela.criarTabela(this.filtros, registros);
    }

}