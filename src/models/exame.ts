

export default class Exame {
    numBoletimOcorrencia: string = '';
    nome: string = '';
    cpf: string = '';
    listaExames: Array<object>;
    id: number = 0;

    constructor() {
        this.listaExames = [];
    }

    totalExames(): number{
        return this.listaExames.length
    }

    cadastrarExame(numBoletimOcorrencia: string, nome: string, cpf: string) {
        const novoExame = {
            numBoletimOcorrencia: numBoletimOcorrencia,
            nome: nome,
            cpf: cpf,
            id: this.totalExames() + 1
        }

        //add a lista
        this.listaExames.push(novoExame)

        return novoExame
    }


}