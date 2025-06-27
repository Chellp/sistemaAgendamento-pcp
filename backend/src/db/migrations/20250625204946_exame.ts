import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
     await knex.schema.createTable('exame', (table) => {
        table.increments('id').primary();
        table.enu('tipo_Exame', ['AD_CAUTELAM', 'VIOLENCIA_SEXUAL', 'CORPO_DELITO']).notNullable();
        table.enu('status', ['PENDENTE, CONCLUIDO', 'CANCELADO']).notNullable();
        table.string('obs');
        table.dateTime('dt_atendimento');
        table.integer('id_paciente').notNullable(); //fk paciente
        table.integer('id_agendamento').notNullable(); //fk agendamento
        table.integer('id_examinador'); //fk examinador
        
        table.string('boletim_ocorrencia').notNullable(); //valor único
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('exame');
}
