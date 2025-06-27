import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('relatorioDiario', (table) => {
        table.increments('cod').primary();
        table.integer('id_relatorio').notNullable(); //fk relatorio
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('relatorioDiario');

}