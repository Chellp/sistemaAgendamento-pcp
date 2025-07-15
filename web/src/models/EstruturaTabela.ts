import type{ InterfaceRegistros } from "./interfaces";

export default class EstruturaTabela {
    tableHead: string = '';
    table: string = '';
    titulo: string = '';
    idTabela: string = '';
    qtdColunas: number = 0;


    constructor(tableHead: string[], idTabela: string, titulo: string) {

        //anexar valores às variáveis
        this.idTabela = idTabela;
        this.titulo = titulo;

        //gerar células do cabeçalho
        let td: string = '';
        for (let coluna of tableHead) {
            td += `<td>${coluna}</td>`;
            this.qtdColunas++;
        }

        //gerar cabeçalho
        this.tableHead = `<thead><tr>${td}</tr></thead>`;
    }

    mostrarHeader() {
        return this.tableHead;
    }

    //recebe variável com conteúdo HTML de cada tipo de filtro e retorna o HTML deles juntos
    private gerarFiltros(filtros: string[] = []) {

        let filtrosGerados: string = '';

        for (let i of filtros) {
            filtrosGerados += i;
        }

        return filtrosGerados;
    }

    //funçao que cria html das linhas da tabela, recebe como parâmetro a quantidade de linhas para impressão em tela
    gerarLinhasTabela(registros: any) {

        //let totalRegistrosPermitidos: number = 10; ---- ATUALIZAÇÃO
        let tableBody: string = '';
        let tr: string = '';        

        //verifica se os registros estão vazios
        if (registros.length == 0) {
            tableBody = `<tr><td class="sem-registro">Ainda não há registros</td></tr>`;
            return tableBody;
        } else {
            //inicia a criação das linhas da tabela
            //percorre o array de objetos
            for (let objeto of registros) {

                let td: string = '';

                //percorre os valores do objeto
                for (let chave in objeto) {


                    //verifica se a propiedade não é herdada
                    if (objeto.hasOwnProperty(chave)) {
                        td += `<td>${objeto[chave]}</td>`;
                    }
                }

                tr += `<tr>${td}</tr>
            `;
            }
        }

        tableBody = tr

        return tableBody;
    }

    criarTabela(filtros: string[] = [], registros: InterfaceRegistros[]): string {
        let tabela: string;

        tabela = `
            <div class="titulo-filtros">
                <h1>${this.titulo}</h1>
                <div class="area-filtros">${this.gerarFiltros(filtros)}</div><!-- .area-filtros -->
            </div>
            <table class="tabela-padrao" id="tabela-${this.idTabela}">
                ${this.tableHead} <tbody>${this.gerarLinhasTabela(registros)}</tbody>
            </table>
        `

        return tabela
    }

}

