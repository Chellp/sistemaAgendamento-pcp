/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('relatorioDiario', (table) => {
        table.increments('cod').primary();
        table.integer('id_relatorio').notNullable(); //fk relatorio
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('relatorioDiario');
};
