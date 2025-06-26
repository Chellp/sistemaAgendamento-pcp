const { table } = require("console");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('relatorio', (table) => {
        table.increments('id').primary();
        table.enu('tipo', ['diario', 'semanal', 'mensal', 'anual']).notNullable();
        table.integer('id_unidade').notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('relatorio');
};
