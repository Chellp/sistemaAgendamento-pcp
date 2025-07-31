import { Knex } from "knex";

const nome = 'PCP - '

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("unidade").del();

    // Inserts seed entries
    await knex("unidade").insert([
        { nome: `${nome}Paranaguá`, estado: 'Paraná', cidade: 'Paranaguá' },
        { nome: 'Unidade Central', estado: 'São Paulo', cidade: 'São Paulo' },
        { nome: 'Unidade Norte', estado: 'Rio de Janeiro', cidade: 'Rio de Janeiro' },
        { nome: 'Unidade Sul', estado: 'Paraná', cidade: 'Curitiba' },
        { nome: 'Unidade Leste', estado: 'Minas Gerais', cidade: 'Belo Horizonte' },
        { nome: 'Unidade Oeste', estado: 'Bahia', cidade: 'Salvador' }
    ]);
};
