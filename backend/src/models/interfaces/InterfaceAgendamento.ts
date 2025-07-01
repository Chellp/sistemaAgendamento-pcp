import { InterfacePaciente } from "./InterfacePaciente"
import { InterfaceAtendente } from "./InterfaceAtendente"
import { InterfaceUnidade } from "./InterfaceUnidade"

export interface InterfaceAgendamento {
    id: number,
    dt_criacao: Date,
    dados: InterfaceInfoAgendamento
}

export interface InterfaceInfoAgendamento {
    dt_agendamento: Date,
    paciente: InterfacePaciente,
    atendente: InterfaceAtendente,
    unidade: InterfaceUnidade
}

export interface InterfaceCriarAgendamento {
    dt_agendamento: Date,
    id_paciente: number,
    id_atendente: number,
    id_unidade: number
}

export interface InterfaceDbAgendamento {
    id: number,
    dt_criacao: Date,
    dt_agendamento: Date,
    id_paciente: number,
    id_atendente: number,
    id_unidade: number
}
