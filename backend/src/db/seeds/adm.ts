import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("adm").del();

    // Inserts seed entries
    await knex("adm").insert([
        { id_perfil: 11 },
        { id_perfil: 12 },
        { id_perfil: 13 },
        { id_perfil: 14 },
        { id_perfil: 15 },
        { id_perfil: 16 }
    ]);
};
