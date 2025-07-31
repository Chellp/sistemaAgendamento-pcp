import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("exame").del();

    // Inserts seed entries
    await knex("exame").insert([
        // PENDENTE
        { boletim_ocorrencia: 'BO1001', status: 'PENDENTE', obs: 'Aguardando resultados', dt_atendimento: '2023-07-25', id_paciente: 1, tipoExame: 1, id_examinador: 3 },
        { boletim_ocorrencia: 'BO1002', status: 'PENDENTE', obs: 'Exame em espera', dt_atendimento: '2023-07-26', id_paciente: 2, tipoExame: 2, id_examinador: 2 },
        { boletim_ocorrencia: 'BO1003', status: 'PENDENTE', obs: 'Pronto para realizar exame', dt_atendimento: '2023-07-27', id_paciente: 3, tipoExame: 3, id_examinador: 2 },
        { boletim_ocorrencia: 'BO1004', status: 'PENDENTE', obs: 'Aguardando confirmação', dt_atendimento: '2023-07-28', id_paciente: 4, tipoExame: 4, id_examinador: 1 },
        { boletim_ocorrencia: 'BO1005', status: 'PENDENTE', obs: 'Reagendamento necessário', dt_atendimento: '2023-07-29', id_paciente: 1, tipoExame: 1, id_examinador: 4 },
        { boletim_ocorrencia: 'BO1006', status: 'PENDENTE', obs: 'Em análise', dt_atendimento: '2023-07-30', id_paciente: 6, tipoExame: 2, id_examinador: 6 },
        { boletim_ocorrencia: 'BO1007', status: 'PENDENTE', obs: 'Aguardando liberação do paciente', dt_atendimento: '2023-07-31', id_paciente: 7, tipoExame: 3, id_examinador: 1 },
        { boletim_ocorrencia: 'BO1008', status: 'PENDENTE', obs: 'Agendado para próxima semana', dt_atendimento: '2023-08-01', id_paciente: 8, tipoExame: 4, id_examinador: 3 },
        { boletim_ocorrencia: 'BO1009', status: 'PENDENTE', obs: 'Aguardando encaminhamento', dt_atendimento: '2023-08-02', id_paciente: 9, tipoExame: 1, id_examinador: 3 },
        { boletim_ocorrencia: 'BO1010', status: 'PENDENTE', obs: 'Exame com urgência', dt_atendimento: '2023-08-03', id_paciente: 10, tipoExame: 2, id_examinador: 1 },

        // CONCLUÍDO
        { boletim_ocorrencia: 'BO2001', status: 'CONCLUIDO', obs: 'Exame finalizado com sucesso', dt_atendimento: '2023-06-25', id_paciente: 1, tipoExame: 1, id_examinador: 1 },
        { boletim_ocorrencia: 'BO2002', status: 'CONCLUIDO', obs: 'Resultados normais', dt_atendimento: '2023-06-26', id_paciente: 2, tipoExame: 2, id_examinador: 2 },
        { boletim_ocorrencia: 'BO2003', status: 'CONCLUIDO', obs: 'Exame concluído, aguardar relatório', dt_atendimento: '2023-06-27', id_paciente: 3, tipoExame: 3, id_examinador: 2 },
        { boletim_ocorrencia: 'BO2004', status: 'CONCLUIDO', obs: 'Resultados positivos', dt_atendimento: '2023-06-28', id_paciente: 4, tipoExame: 4, id_examinador: 4 },
        { boletim_ocorrencia: 'BO2005', status: 'CONCLUIDO', obs: 'Paciente liberado', dt_atendimento: '2023-06-29', id_paciente: 5, tipoExame: 1, id_examinador: 5 },
        { boletim_ocorrencia: 'BO2006', status: 'CONCLUIDO', obs: 'Exame sem intercorrências', dt_atendimento: '2023-06-30', id_paciente: 6, tipoExame: 2, id_examinador: 5 },
        { boletim_ocorrencia: 'BO2007', status: 'CONCLUIDO', obs: 'Resultado entregue ao paciente', dt_atendimento: '2023-07-01', id_paciente: 7, tipoExame: 3, id_examinador: 1 },
        { boletim_ocorrencia: 'BO2008', status: 'CONCLUIDO', obs: 'Exame de rotina concluído', dt_atendimento: '2023-07-02', id_paciente: 8, tipoExame: 4, id_examinador: 2 },
        { boletim_ocorrencia: 'BO2009', status: 'CONCLUIDO', obs: 'Relatório pronto', dt_atendimento: '2023-07-03', id_paciente: 9, tipoExame: 1, id_examinador: 3 },
        { boletim_ocorrencia: 'BO2010', status: 'CONCLUIDO', obs: 'Sem complicações', dt_atendimento: '2023-07-04', id_paciente: 10, tipoExame: 2, id_examinador: 4 },

        // CANCELADO
        { boletim_ocorrencia: 'BO3001', status: 'CANCELADO', obs: 'Exame cancelado pelo paciente', dt_atendimento: '2023-05-25', id_paciente: 1, tipoExame: 1, id_examinador: 1 },
        { boletim_ocorrencia: 'BO3002', status: 'CANCELADO', obs: 'Erro na solicitação', dt_atendimento: '2023-05-26', id_paciente: 2, tipoExame: 2, id_examinador: 2 },
        { boletim_ocorrencia: 'BO3003', status: 'CANCELADO', obs: 'Exame reagendado', dt_atendimento: '2023-05-27', id_paciente: 3, tipoExame: 3, id_examinador: 3 },
        { boletim_ocorrencia: 'BO3004', status: 'CANCELADO', obs: 'Problemas técnicos no equipamento', dt_atendimento: '2023-05-28', id_paciente: 4, tipoExame: 4, id_examinador: 4 },
        { boletim_ocorrencia: 'BO3005', status: 'CANCELADO', obs: 'Paciente não compareceu', dt_atendimento: '2023-05-29', id_paciente: 5, tipoExame: 1, id_examinador: 4 },
        { boletim_ocorrencia: 'BO3006', status: 'CANCELADO', obs: 'Problema na amostra', dt_atendimento: '2023-05-30', id_paciente: 6, tipoExame: 2, id_examinador: 4 },
        { boletim_ocorrencia: 'BO3007', status: 'CANCELADO', obs: 'Paciente optou por outro exame', dt_atendimento: '2023-06-01', id_paciente: 7, tipoExame: 3, id_examinador: 4 },
        { boletim_ocorrencia: 'BO3008', status: 'CANCELADO', obs: 'Exame desnecessário', dt_atendimento: '2023-06-02', id_paciente: 8, tipoExame: 4, id_examinador: 2 },
        { boletim_ocorrencia: 'BO3009', status: 'CANCELADO', obs: 'Erro no agendamento', dt_atendimento: '2023-06-03', id_paciente: 9, tipoExame: 1, id_examinador: 1 }
    ]);
};
