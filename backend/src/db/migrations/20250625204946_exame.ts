import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('exame', (table) => {
        table.increments('id').primary();
        table.string('boletim_ocorrencia').notNullable(); //valor único
        table.enu('status', ['PENDENTE', 'CONCLUIDO', 'CANCELADO']).notNullable();
        table.string('obs');
        table.string('dt_atendimento');
        table.integer('id_paciente').notNullable().unsigned()
            .references('id').inTable('paciente'); //fk paciente
        table.integer('tipoExame').notNullable().unsigned()
            .references('id').inTable('tipoExame');    //fk tipoExame
        table.integer('id_examinador').unsigned()
            .references('cod').inTable('examinador'); //fk examinador

    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('exame');
}
