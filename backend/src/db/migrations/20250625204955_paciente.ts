import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('paciente', (table) => {
        table.integer('id').primary();
        table.string('cpf').notNullable(); //valor único
        table.string('nome').notNullable();
        table.date('dt_nasc').notNullable();
        table.string('genero').notNullable();
        table.string('endereco').notNullable();
        table.string('telefone').notNullable();
        table.string('observacao').unsigned();
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('paciente');
}