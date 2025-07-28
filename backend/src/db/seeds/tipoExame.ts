import { Knex } from "knex";



export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("tipoExame").del();

    // Inserts seed entries
    await knex("tipoExame").insert([
        { id: 1, cod: 'K001', nome: "Lesão Corporal" },
        { id: 2, cod: 'K002', nome: `Lesão Corporal  "Ad Cautelam"` },
        { id: 2, cod: 'K004', nome: "Exame de Verificação de Violência Sexual" },
        { id: 4, cod: 'K001', nome: "Exame de Sanidade física (retorno)" },
    ]);
};