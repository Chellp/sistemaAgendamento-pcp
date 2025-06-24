import { secretariosDB } from "../models/interfaces/secretario";
export default class SecretariosDB {
    constructor() {
        this.secretariosDB = secretariosDB;
    }
    getSecretarios() {
        return secretariosDB;
    }
    getSecretariosAtivos(status = true) {
        const registros = secretariosDB.filter(secretario => secretario.ativo === status);
        return registros;
    }
    getSecretarioNome(nome) {
        const registros = secretariosDB.filter(secretario => secretario.nome === nome);
        return registros;
    }
    getSecretariosUnidade(unidade) {
        const registros = secretariosDB.filter(secretario => secretario.nome === unidade);
        return registros;
    }
}
