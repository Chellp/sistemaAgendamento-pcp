import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("agendamento").del();

    // Inserts seed entries
    await knex("agendamento").insert([
         { dt_criacao: '2023-07-01', data: '2023-07-25', hora: '09:00', id_atendente: 7, id_exame: 1, id_unidade: 1 }, // BO1001
        { dt_criacao: '2023-07-02', data: '2023-07-26', hora: '10:00', id_atendente: 6, id_exame: 2, id_unidade: 2 }, // BO1002
        { dt_criacao: '2023-07-03', data: '2023-07-27', hora: '11:00', id_atendente: 9, id_exame: 8, id_unidade: 3 }, // BO1003
        { dt_criacao: '2023-07-04', data: '2023-07-28', hora: '13:00', id_atendente: 8, id_exame: 7, id_unidade: 4 }, // BO1004
        { dt_criacao: '2023-07-05', data: '2023-07-29', hora: '14:00', id_atendente: 8, id_exame: 9, id_unidade: 5 }, // BO1005
        { dt_criacao: '2023-07-06', data: '2023-07-30', hora: '15:00', id_atendente: 6, id_exame: 10, id_unidade: 1 }, // BO1006
        { dt_criacao: '2023-07-07', data: '2023-07-31', hora: '16:00', id_atendente: 7, id_exame: 3, id_unidade: 2 }, // BO1007
        { dt_criacao: '2023-07-08', data: '2023-08-01', hora: '17:00', id_atendente: 8, id_exame: 4, id_unidade: 3 }, // BO1008
        { dt_criacao: '2023-07-09', data: '2023-08-02', hora: '18:00', id_atendente: 9, id_exame: 5, id_unidade: 4 }, // BO1009
        { dt_criacao: '2023-07-10', data: '2023-08-03', hora: '19:00', id_atendente: 10, id_exame: 6, id_unidade: 5 },  // BO1010

        { dt_criacao: '2023-07-01', data: '2023-07-25', hora: '09:00', id_atendente: 1, id_exame: 10, id_unidade: 1 }, // BO2001
        { dt_criacao: '2023-07-02', data: '2023-07-26', hora: '10:00', id_atendente: 2, id_exame: 11, id_unidade: 2 }, // BO2002
        { dt_criacao: '2023-07-03', data: '2023-07-27', hora: '11:00', id_atendente: 3, id_exame: 12, id_unidade: 3 }, // BO2003
        { dt_criacao: '2023-07-04', data: '2023-07-28', hora: '13:00', id_atendente: 4, id_exame: 13, id_unidade: 4 }, // BO2004
        { dt_criacao: '2023-07-05', data: '2023-07-29', hora: '14:00', id_atendente: 5, id_exame: 14, id_unidade: 5 }, // BO2005
        { dt_criacao: '2023-07-06', data: '2023-07-30', hora: '15:00', id_atendente: 6, id_exame: 15, id_unidade: 1 }, // BO2006
        { dt_criacao: '2023-07-07', data: '2023-07-31', hora: '16:00', id_atendente: 7, id_exame: 16, id_unidade: 2 }, // BO2007
        { dt_criacao: '2023-07-08', data: '2023-08-01', hora: '17:00', id_atendente: 8, id_exame: 17, id_unidade: 3 }, // BO2008
        { dt_criacao: '2023-07-09', data: '2023-08-02', hora: '18:00', id_atendente: 9, id_exame: 18, id_unidade: 4 }, // BO2009
        { dt_criacao: '2023-07-10', data: '2023-08-03', hora: '19:00', id_atendente: 10, id_exame: 19, id_unidade: 5 },  // BO2010
    
        { dt_criacao: '2023-05-25', data: '2023-05-26', hora: '09:30', id_atendente: 1, id_exame: 20, id_unidade: 1 }, // BO2011
        { dt_criacao: '2023-05-26', data: '2023-05-27', hora: '10:00', id_atendente: 2, id_exame: 21, id_unidade: 2 }, // BO2012
        { dt_criacao: '2023-05-27', data: '2023-05-28', hora: '11:30', id_atendente: 3, id_exame: 22, id_unidade: 3 }, // BO2013
        { dt_criacao: '2023-05-28', data: '2023-05-29', hora: '13:00', id_atendente: 4, id_exame: 23, id_unidade: 4 }, // BO2014
        { dt_criacao: '2023-05-29', data: '2023-05-30', hora: '14:30', id_atendente: 5, id_exame: 24, id_unidade: 5 }, // BO2015
        { dt_criacao: '2023-05-30', data: '2023-06-01', hora: '15:00', id_atendente: 6, id_exame: 25, id_unidade: 1 }, // BO2016
        { dt_criacao: '2023-06-01', data: '2023-06-02', hora: '16:00', id_atendente: 7, id_exame: 26, id_unidade: 2 }, // BO2017
        { dt_criacao: '2023-06-02', data: '2023-06-03', hora: '17:30', id_atendente: 8, id_exame: 27, id_unidade: 3 }, // BO2018
        { dt_criacao: '2023-06-03', data: '2023-06-04', hora: '18:00', id_atendente: 9, id_exame: 28, id_unidade: 4 }, // BO2019
        { dt_criacao: '2023-06-04', data: '2023-06-05', hora: '09:30', id_atendente: 10, id_exame: 29, id_unidade: 5 }  // BO2020
    ]);
};
