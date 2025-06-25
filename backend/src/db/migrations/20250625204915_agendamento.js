/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('agendamento', (table) => {
        table.increments('id').primary();
        table.dateTime('dt_criacao');
        table.dateTime('dt_agendamento').notNullable();;
        table.integer('paciente').notNullable();    //fk paciente
        table.integer('atendente').notNullable();   //fk atendente
        table.integer('unidade').notNullable(); //fk unidade
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('agendamento');
};
