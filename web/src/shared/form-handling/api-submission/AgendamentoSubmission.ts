import type { HandleAgendamentoValues } from "../../../models/interfaces/agendamentoComponentsInterface";
import type { dadosPacienteInterface } from "../../../models/interfaces/pacienteUserInterface";


export default class EnviarComponentesDB {
    agendamento(agendamento: HandleAgendamentoValues) {
        // Implementação para enviar dados de agendamento ao banco de dados

        const values = agendamento.values;

        const paciente: dadosPacienteInterface = {
            cpf: values.cpf,
            nome: values.nome,
            genero: values.genero,
            dt_nasc: agendamento.nascimento,

        };
    }

    paciente(paciente: dadosPacienteInterface) {
        // Implementação para enviar dados de paciente ao banco de dados
        // Aqui você pode chamar a API correspondente para criar ou atualizar um paciente
    }

    exame(exame: any) {
        // Implementação para enviar dados de exame ao banco de dados
        // Aqui você pode chamar a API correspondente para criar ou atualizar um exame
    }

    unidade() {
        // Implementação para enviar dados de unidade ao banco de dados
        // Aqui você pode chamar a API correspondente para criar ou atualizar uma unidade
    }

}