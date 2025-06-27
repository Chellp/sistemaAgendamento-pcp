import { InterfacePaciente } from "./InterfacePaciente"
import { InterfaceAtendente } from "./InterfaceAtendente"
import { InterfaceUnidade } from "./InterfaceUnidade"

export interface InterfaceAgendamento{
    id: number,
    dt_criacao: Date,
    dados: InterfaceCriarAgendamento
}

export interface InterfaceCriarAgendamento{
    dt_agendamento: Date,
    paciente: InterfacePaciente,
    atendente: InterfaceAtendente,
    unidade: InterfaceUnidade
}