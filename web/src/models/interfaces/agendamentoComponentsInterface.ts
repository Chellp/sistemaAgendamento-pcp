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