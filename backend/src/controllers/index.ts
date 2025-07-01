

export class MsgController {

    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    criado() {
        return `${this.nome} Criado!`
    }

    atualizado() {
        return `${this.nome} Atualizado!`
    }

    removido() {
        return `${this.nome} Removido!`
    }
}