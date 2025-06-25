import { InterfaceExames, examesDB } from "../models/interfaces/InterfaceExames";

export default class ExamesDB {

    private examesDB: InterfaceExames[] = examesDB;

    atualizarDtAgendamento(exame: InterfaceExames) {
        let item: InterfaceExames = this.getExameCod(exame.cod);
        item = exame;
    }

    getTodosExames(): InterfaceExames[] {
        return this.examesDB;
    }

    getExameCod(cod: number): InterfaceExames {
        const registros = examesDB.filter(exame => exame.cod === cod);
        return registros
    }

    getExameBoletimOcorrencia(numeroBoletim: string): InterfaceExames {
        const registros = examesDB.filter(exame => exame.numeroBoletim === numeroBoletim);
        return registros
    }

    getExamesNomePaciente(nome: string): InterfaceExames[] {
        const registros = examesDB.filter(exame => exame.nome === nome);
        return registros
    }

    getExameCpfPaciente(cpf: string): InterfaceExames[] {
        const registros = examesDB.filter(exame => exame.cpf === cpf);
        return registros
    }

    getExamesGenero(genero: "M" | "F"): InterfaceExames[] {
        const registros = examesDB.filter(exame => exame.genero === genero);
        return registros
    }

    getExamesCidade(cidade: string): InterfaceExames[] {
        const registros = examesDB.filter(exame => exame.cidade === cidade);
        return registros
    }

    getExamesEstado(estado: string): InterfaceExames[] {
        const registros = examesDB.filter(exame => exame.estado === estado);
        return registros
    }

    getExamesTipoExame(tipoExame: "Violencia Sexual" | "Lesao Corporal" | "Ad Cautelam"): InterfaceExames[] {
        const registros = examesDB.filter(exame => exame.tipoExame === tipoExame);
        return registros
    }

    getExamesAtendente(atendente: string): InterfaceExames[] {
        const registros = examesDB.filter(exame => exame.atendente === atendente);
        return registros
    }

    getExamesDataAgendada(dtAgendada: string): InterfaceExames[] {
        const registros = examesDB.filter(exame => exame.dtAgendada === dtAgendada);
        return registros
    }

    getExamesStatus(status: "Concluido" | "Pendente" | "Cancelado"): InterfaceExames[] {
        const registros = examesDB.filter(exame => exame.status === status);
        return registros
    }

    //add pesquisar por idade e outras infromações que serão calculadas, ex; data e hora que precisarão ser extraidos

}