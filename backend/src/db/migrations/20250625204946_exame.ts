import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('exame', (table) => {
        table.increments('id').primary();
        table.string('boletim_ocorrencia').notNullable(); //valor único
        table.enu('tipo_exame', ['AD_CAUTELAM', 'VIOLENCIA_SEXUAL', 'CORPO_DELITO']).notNullable();
        table.enu('status', ['PENDENTE', 'CONCLUIDO', 'CANCELADO']).notNullable();
        table.string('obs');
        table.dateTime('dt_atendimento');
        table.integer('id_paciente').unsigned()
            .references('id').inTable('paciente'); //fk paciente
        table.integer('id_agendamento').unsigned()
            .references('id').inTable('agendamento'); //fk agendamento
        table.integer('id_examinador').unsigned()
            .references('cod').inTable('examinador'); //fk examinador

    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('exame');
}
