import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('conclusaoExame', (table) => {
        table.increments('id').primary();
        table.string('dt_atendimento').notNullable();
        table.integer('id_exame').unsigned()
        .references('cod').inTable('exame');
        table.integer('id_examinador').unsigned()
        .references('cod').inTable('examinador');
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('conclusaoExame')
}

