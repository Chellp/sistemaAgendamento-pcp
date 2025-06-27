import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void>  {
    await knex.schema.createTable('agendamento', (table) => {
        table.increments('id').primary();
        table.dateTime('dt_criacao');
        table.dateTime('dt_agendamento').notNullable();
        table.integer('paciente').notNullable();    //fk paciente
        table.integer('atendente').notNullable();   //fk atendente
        table.integer('unidade').notNullable(); //fk unidade
    })
};


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('agendamento');
};
