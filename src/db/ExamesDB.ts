import { InterfaceExames, examesDB } from "../models/interfaces/exames";

export default class ExamesDB {

    examesDB: InterfaceExames[] = examesDB;

    getExameCod(cod: number) {
        const registros = examesDB.filter(exame => exame.cod === cod);
        return registros
    }

    getExameBoletimOcorrencia(numeroBoletim: string) {
        const registros = examesDB.filter(exame => exame.numeroBoletim === numeroBoletim);
        return registros
    }

    getExamesNomePaciente(nome: string) {
        const registros = examesDB.filter(exame => exame.nome === nome);
        return registros
    }

    getExameCpfPaciente(cpf: string) {
        const registros = examesDB.filter(exame => exame.cpf === cpf);
        return registros
    }

    getExamesGenero(genero: "M" | "F") {
        const registros = examesDB.filter(exame => exame.genero === genero);
        return registros
    }

    getExamesCidade(cidade: string) {
        const registros = examesDB.filter(exame => exame.cidade === cidade);
        return registros
    }

    getExamesEstado(estado: string) {
        const registros = examesDB.filter(exame => exame.estado === estado);
        return registros
    }

    getExamesTipoExame(tipoExame: "Violencia Sexual" | "Lesao Corporal" | "Ad Cautelam") {
        const registros = examesDB.filter(exame => exame.tipoExame === tipoExame);
        return registros
    }

    getExamesAtendente(atendente: string) {
        const registros = examesDB.filter(exame => exame.atendente === atendente);
        return registros
    }

    getExamesDataAgendada(dtAgendada: string) {
        const registros = examesDB.filter(exame => exame.dtAgendada === dtAgendada);
        return registros
    }

    getExamesStatus(status: "Concluido" | "Pendente" | "Cancelado") {
        const registros = examesDB.filter(exame => exame.status === status);
        return registros
    }

}