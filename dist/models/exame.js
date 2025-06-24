export default class Exame {
    constructor() {
        this.numBoletimOcorrencia = '';
        this.nome = '';
        this.cpf = '';
        this.id = 0;
        this.listaExames = [];
    }
    totalExames() {
        return this.listaExames.length;
    }
    cadastrarExame(numBoletimOcorrencia, nome, cpf) {
        const novoExame = {
            numBoletimOcorrencia: numBoletimOcorrencia,
            nome: nome,
            cpf: cpf,
            id: this.totalExames() + 1
        };
        //add a lista
        this.listaExames.push(novoExame);
        return novoExame;
    }
}
