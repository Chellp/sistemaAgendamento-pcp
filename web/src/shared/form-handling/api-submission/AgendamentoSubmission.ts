import CheckAgendamento from "../form-actions/validators/AgendamentoValidator";

//INTERFACES
import type { HandleAgendamentoValues, InterfaceCriarDbAgendamento } from "../../../models/interfaces/agendamentoComponentsInterface";
import type { dadosPacienteInterface } from "../../../models/interfaces/pacienteUserInterface";
import type { dadosCriarAgendInterface } from "../../../models/interfaces/agendamentoComponentsInterface";
import type { InterfaceCriarExame } from "../../../models/interfaces/CriaExamesInterface";

//APIs
import AgendamentoAPI from "../../services/apis/apiInterna/agendamentoAPI";
const agendamentoAPI = new AgendamentoAPI();

const teste: dadosCriarAgendInterface = {
    "paciente": {
        "nome": "Maria Oliveira",
        "dt_nasc": '2009-05-19',
        "cpf": "9965656",
        "genero": "Feminino",
        "telefone": "9876-5432",
        "endereco": "Avenida Central, 45, Cidade Z, Estado W",
        "observacao": ""
    },
    "agendamento": {
        "dt_criacao": "2525-07-28",
        "data": "2023-11-01",
        "hora": "15:00",
        "id_exame": 1,
        "id_atendente": 1,
        "id_unidade": 1
    },
    "exame": {
        "boletim_ocorrencia": "BO987654321",
        "tipoExame": "K001",
        "status": "PENDENTE",
        "obs": "Exame solicitado para acompanhamento médico.",
        "id_paciente": 2
    }
}

export default class AgendamentoSubmission {

    async getAgendamento(ag: HandleAgendamentoValues) {

        //Instancirar validação
        const validacao = new CheckAgendamento(ag);

        if (!validacao.checkAgendamento()) {
            console.error("Erro na validação do agendamento.");
            console.log(validacao.checkAgendamento());
            throw new Error("Campos obrigatórios não preenchidos: getAgendamento()");
        }

        const paciente: dadosPacienteInterface = {
            cpf: ag.cpf,
            nome: ag.nome,
            dt_nasc: ag.dt_nasc,
            genero: ag.genero,
            endereco: ag.endereco,
            telefone: ag.telefone,
            observacao: '',
        }

        const exame: InterfaceCriarExame = {
            boletim_ocorrencia: ag.boletim,
            tipoExame: 'K001',
            status: 'PENDENTE',
            obs: ag.observacoes,
        }

        const agendamento: InterfaceCriarDbAgendamento = {
            dt_criacao: '',
            data: ag.data,
            hora: ag.horario,
            id_atendente: 1,
            id_unidade: 1.
        }

        return await this.criar({paciente, agendamento, exame})
    }

    async criar(agendamento: dadosCriarAgendInterface) {
        try {
            console.log(agendamento);
            const response = await agendamentoAPI.criarAgendamento(agendamento)
            return response
        } catch (error: any) {
            console.log("Erro ao criar paciente:", error);
            return -1
        }
    }

}