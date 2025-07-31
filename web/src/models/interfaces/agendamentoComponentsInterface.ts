//FORMULARIO DE AGENDAMENTO
// Interface para os valores do formulário de agendamento
import { Dayjs } from 'dayjs';

import type { dadosPacienteInterface } from './pacienteUserInterface';
import type { InterfaceCriarExame } from './CriaExamesInterface';

export type FormValues = {
  boletim: string;
  cpf: string;
  nome: string;
  genero: string;
  dt_nasc: Dayjs | null;
  observacoes: string;
  exameSelecionado: string;
  endereco: string;
  telefone: string;
  horario: Dayjs | null;
  data: Dayjs | null;
};

export interface HandleAgendamentoValues {
  boletim: string,
  cpf: string,
  nome: string,
  genero: string,
  dt_nasc: string,
  observacoes: string,
  exameSelecionado: string,
  endereco: string,
  telefone: string,
  horario: string, 
  data: string 
}

export interface InterfaceCriarAgendamento {
  dt_agendamento: string,
  id_paciente: number,
  id_atendente: number,
  id_unidade: number
}

//retorno
export interface InterfaceDbAgendamento {
  id: number,
  dt_criacao: string,
  dt_agendamento: string,
  id_paciente: number,
  id_atendente: number,
  id_unidade: number
}

export interface InterfaceCriarDbAgendamento {
    dt_criacao: string,
    data: string,
    hora: string,
    id_exame?: number,
    id_atendente: number,
    id_unidade: number
}

export interface dadosCriarAgendInterface {
  paciente: dadosPacienteInterface,
  agendamento: InterfaceCriarDbAgendamento,
  exame: InterfaceCriarExame
}


// RENDERIZAÇÃO DE TABELA DE AGENDAMENTOS
// Interface para os dados da tabela de agendamentos
export interface RowDataAgendamentoTable {
  id_agendamento: string;
  horario: string;
  tipoExame: string;
  cpf: string;
  nome: string;
  genero: string;
  idade: string;
  status: string;
}

export function createDataAgendTable(
  id_agendamento: string,
  horario: string,
  tipoExame: string,
  cpf: string,
  nome: string,
  genero: string,
  idade: string,
  status: string
) {
  return { id_agendamento, horario, tipoExame, cpf, nome, genero, idade, status };
}