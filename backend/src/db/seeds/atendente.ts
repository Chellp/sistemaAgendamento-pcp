import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("atendente").del();

    // Inserts seed entries
    await knex("atendente").insert([
        { id_perfil: 1 },
        { id_perfil: 2 },
        { id_perfil: 3 },
        { id_perfil: 4 },
        { id_perfil: 5 }
    ]);
};
