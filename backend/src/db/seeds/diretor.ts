import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("diretor").del();

    // Inserts seed entries
    await knex("diretor").insert([
        { id_perfil: 16 },
        { id_perfil: 17 },
        { id_perfil: 18 },
        { id_perfil: 19 },
        { id_perfil: 20 }
    ]);
};
