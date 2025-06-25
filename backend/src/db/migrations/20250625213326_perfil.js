const { table } = require("console");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('perfil', (table) => {
        table.increments('id').primary();
        table.string('matricula').notNullable();
        table.string('nome').notNullable();
        table.integer('unidade').notNullable(); //fk unidade
        table.enu('tipo_perfil', ['atendente', 'examinador', 'administrador', 'diretor']).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('perfil');
};
