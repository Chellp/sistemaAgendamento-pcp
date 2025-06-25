/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('paciente', (table) => {
        table.integer('id').primary();
        table.string('cpf').notNullable(); //valor único
        table.string('nome').notNullable();
        table.string('dt_nasc').notNullable();
        table.string('genero').notNullable();
        table.string('endereco').notNullable();
        table.string('telefone').notNullable();
        table.string('observacao').unsigned();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('paciente');
};
