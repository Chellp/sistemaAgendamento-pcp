
export default class EstruturaTabela {
    tableHead: string = '';
    table: string = '';
    titulo: string = '';
    tipoTabela: string = '';
    nomeTabela: string = '';

    constructor(tableHead: Array<string>, tipoTabela: string, nomeTabela: string, titulo: string) {

        //anexar valores às variáveis
        this.tipoTabela = tipoTabela;
        this.nomeTabela = nomeTabela;
        this.titulo = titulo;

        //gerar células do cabeçalho
        let td: string = '';
        for (let td of tableHead) {
            td += `<td>${td}</td>`
        }

        //gerar cabeçalho
        this.tableHead = `<thead><tr>${td}</tr></thead>`
    }

    gerarFiltros(filtros: string[] = []) {

        let filtrosGerados: string = '';

        for(let i of filtros){
            filtrosGerados += i;
        }

        return filtrosGerados;
    }

    criarTabela(filtros: string[] = []) {
        let tabela: string;

        tabela = `
            <div class="titulo-filtros">
                <h1>${this.titulo}</h1>
                <div class="area-filtros">${this.gerarFiltros(filtros)}</div><!-- .area-filtros -->
            </div> <!-- .titulo-filtros -->

            <table class="tabela-padrao" id="tabela-todos-relatorios">
                <thead>
                    <tr>
                        <td>Data</td>
                        <td>Hora</td>
                        <td>Relatorio</td>
                        <td> </td>
                    </tr>
                </thead>

                <tbody></tbody>

            </table>
        `

        return tabela
    }

}