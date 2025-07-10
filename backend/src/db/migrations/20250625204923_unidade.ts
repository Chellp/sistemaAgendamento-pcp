import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('unidade', (table) => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('estado').notNullable();
        table.string('cidade').notNullable();
    });
};


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('unidade');
};
