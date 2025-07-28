import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('tipoExame', (table) => {
        table.string('id').notNullable().primary();
        table.string('nome').notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('tipoExame');
}