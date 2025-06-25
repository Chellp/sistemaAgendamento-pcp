/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('exame', (table) => {
        table.increments('cod').primary();
        table.string('boletim_ocorrencia').notNullable(); //valor único
        table.enu('tipo_Exame', ['AD_CAUTELAM', 'VIOLENCIA_SEXUAL', 'CORPO_DELITO']).notNullable();
        table.enu('status', ['PENDENTE, CONCLUIDO', 'CANCELADO']).notNullable();
        table.dateTime('dt_atendimemto');
        table.id('examinador'); //fk examinador
        table.string('obs');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('exame');
};
