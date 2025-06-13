interface Registro {
    [key: string]: any;  // Usando chave do tipo string e valor de qualquer tipo
}

export default class EstruturaTabela {
    tableHead: string = '';
    table: string = '';
    titulo: string = '';
    tipoTabela: string = '';
    nomeTabela: string = '';
    qtdColunas: number = 0;


    constructor(tableHead: Array<string>, tipoTabela: string, nomeTabela: string, titulo: string) {

        //anexar valores às variáveis
        this.tipoTabela = tipoTabela;
        this.nomeTabela = nomeTabela;
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


    //definir como privado
    //recebe variável com conteúdo HTML de cada tipo de filtro e retorna o HTML deles juntos
    gerarFiltros(filtros: string[] = []) {

        let filtrosGerados: string = '';

        for (let i of filtros) {
            filtrosGerados += i;
        }

        return filtrosGerados;
    }

    //deifinir como privado
    //funçao que cria html das linhas da tabela, recebe como parâmetro a quantidade de linhas para impressão em tela
    gerarLinhasTabela(registros: Registro[]) {

        //let totalRegistrosPermitidos: number = 10; ---- ATUALIZAÇÃO
        let tableBody: string = '';
        let tr: string = '';

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

        tableBody = tr

        return tableBody;
    }

    criarTabela(filtros: string[] = [], registros: Registro[]) {
        let tabela: string;

        tabela = `
            <div class="titulo-filtros">
                <h1>${this.titulo}</h1>
                <div class="area-filtros">${this.gerarFiltros(filtros)}</div><!-- .area-filtros -->
            </div>
            <table class="tabela-padrao" id="tabela-todos-relatorios">
                ${this.tableHead} <tbody>${this.gerarLinhasTabela(registros)}</tbody>
            </table>
        `

        return tabela
    }

}




//------------------------------ TESTES ----------------------------------------


const teste = new EstruturaTabela(['tt', 'tt', 'hhh', '55'], 'tt', 'hh', 'mkkk');


const testeobjeto: Record<string, any>[] = [{
    "valor1": "valor 1",
    "valor2": "valor 2",
    "valor3": "valor 3",
    "valor4": "valor 4"
},
{
    "valor1": "valor 11",
    "valor2": "valor 12",
    "valor3": "valor 13",
    "valor4": "valor 14"
},
{
    "valor1": "valor 1s1",
    "valor2": "valor 1s2",
    "valor3": "valor 1s3",
    "valor4": "valor 1s4"
}

];

//console.log(teste.gerarLinhasTabela(testeobjeto));
console.log(teste.criarTabela(['filtro 1', 'filtro 2'],testeobjeto));
