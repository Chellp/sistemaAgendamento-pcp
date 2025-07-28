import { Knex } from "knex";

const nome = 'PCP - '

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("unidade").del();

    // Inserts seed entries
    await knex("unidade").insert([
        { id: 1, nome: `${nome}Paranaguá`},
    ]);
};
