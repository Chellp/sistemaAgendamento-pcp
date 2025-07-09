import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('relatorio', (table) => {
        table.increments('id').primary();
        table.enu('tipo', ['diario', 'semanal', 'mensal', 'anual']).notNullable();
        table.integer('id_unidade').notNullable()
            .references('id').inTable('unidade'); //fk unidade;
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('relatorio');
}