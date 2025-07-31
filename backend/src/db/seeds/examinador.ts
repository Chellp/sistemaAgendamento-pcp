import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("examinador").del();

    // Inserts seed entries
    await knex("examinador").insert([
        { id_perfil: 6, especialidade: 'Nenhum' },
        { id_perfil: 7, especialidade: 'Nenhum' },
        { id_perfil: 8, especialidade: 'Nenhum' },
        { id_perfil: 9, especialidade: 'Nenhum' },
        { id_perfil: 10, especialidade: 'Nenhum' }
    ]);
};
