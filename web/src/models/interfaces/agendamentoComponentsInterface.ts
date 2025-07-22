//FORMULARIO DE AGENDAMENTO
// Interface para os valores do formulário de agendamento
import { Dayjs } from 'dayjs';

export type FormValues = {
    boletim: string;
    cpf: string;
    nome: string;
    genero: string;
    nascimento: Dayjs | null;
    observacoes: string;
    exameSelecionado: string;
    endereco: string;
    telefone: string;
    horario: Dayjs | null;
    data: Dayjs | null;
};


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
}

export function createDataAgendTable(
  id_agendamento: string,
  horario: string,
  tipoExame: string,
  cpf: string,
  nome: string,
  genero: string,
  idade: string
) {
  return { id_agendamento, horario, tipoExame, cpf, nome, genero, idade };
}