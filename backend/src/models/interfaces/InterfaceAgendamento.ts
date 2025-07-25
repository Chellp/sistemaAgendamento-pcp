import { InterfacePaciente } from "./InterfacePaciente"
import { InterfaceAtendente } from "./InterfaceAtendente"
import { InterfaceUnidade } from "./InterfaceUnidade"

export interface InterfaceAgendamento {
    id: number,
    dt_criacao: string,
    dados: InterfaceInfoAgendamento
}

export interface InterfaceInfoAgendamento {
    dt_agendamento: Date,
    exame: InterfacePaciente,
    atendente: InterfaceAtendente,
    unidade: InterfaceUnidade
}

export interface InterfaceCriarAgendamento {
    dt_criacao: string,
    dt_agendamento: string,
    exame: number,
    atendente: number,
    unidade: number
}

export interface InterfaceCriarDbAgendamento {
    dt_criacao: string,
    data: string,
    hora: string,
    id_exame: number,
    id_atendente: number,
    id_unidade: number
}

export interface InterfaceDbAgendamento {
    id: number,
    dt_criacao: Date,
    dt_agendamento: Date,
    exame: number,
    id_atendente: number,
    id_unidade: number
}
