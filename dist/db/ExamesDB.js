import { examesDB } from "../models/interfaces/exames";
export default class ExamesDB {
    constructor() {
        this.examesDB = examesDB;
    }
    getExameCod(cod) {
        const registros = examesDB.filter(exame => exame.cod === cod);
        return registros;
    }
    getExameBoletimOcorrencia(numeroBoletim) {
        const registros = examesDB.filter(exame => exame.numeroBoletim === numeroBoletim);
        return registros;
    }
    getExamesNomePaciente(nome) {
        const registros = examesDB.filter(exame => exame.nome === nome);
        return registros;
    }
    getExameCpfPaciente(cpf) {
        const registros = examesDB.filter(exame => exame.cpf === cpf);
        return registros;
    }
    getExamesGenero(genero) {
        const registros = examesDB.filter(exame => exame.genero === genero);
        return registros;
    }
    getExamesCidade(cidade) {
        const registros = examesDB.filter(exame => exame.cidade === cidade);
        return registros;
    }
    getExamesEstado(estado) {
        const registros = examesDB.filter(exame => exame.estado === estado);
        return registros;
    }
    getExamesTipoExame(tipoExame) {
        const registros = examesDB.filter(exame => exame.tipoExame === tipoExame);
        return registros;
    }
    getExamesAtendente(atendente) {
        const registros = examesDB.filter(exame => exame.atendente === atendente);
        return registros;
    }
    getExamesDataAgendada(dtAgendada) {
        const registros = examesDB.filter(exame => exame.dtAgendada === dtAgendada);
        return registros;
    }
    getExamesStatus(status) {
        const registros = examesDB.filter(exame => exame.status === status);
        return registros;
    }
}
