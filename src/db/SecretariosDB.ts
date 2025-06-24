import { secretariosDB, InterfaceSecretario } from "../models/interfaces/secretario";

export default class SecretariosDB{
    secretariosDB: InterfaceSecretario[] = secretariosDB;

    getSecretarios(){
        return secretariosDB;
    }

    getSecretariosAtivos(status: boolean = true){
        const registros = secretariosDB.filter(secretario => secretario.ativo === status)
        return registros;
    }

    getSecretarioNome(nome: string){
        const registros = secretariosDB.filter(secretario => secretario.nome === nome)
        return registros;
    }

    getSecretariosUnidade(unidade: string){
        const registros = secretariosDB.filter(secretario => secretario.nome === unidade)
        return registros;
    }
    
}