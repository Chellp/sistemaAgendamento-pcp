import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('agendamento', (table) => {
        table.increments('id').primary();
        table.string('dt_criacao');
        table.string('data').notNullable();
        table.string('hora').notNullable();
        table.integer('id_atendente').notNullable().unsigned()
            .references('cod').inTable('atendente');   //fk atendente
        table.integer('id_exame').notNullable().unsigned()
            .references('id').inTable('exame');    //fk paciente
        table.integer('id_unidade').notNullable().unsigned()
            .references('id').inTable('unidade'); //fk unidade
    })
};


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('agendamento');
};
