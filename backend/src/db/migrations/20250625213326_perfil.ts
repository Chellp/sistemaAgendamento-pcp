import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('perfil', (table) => {
        table.increments('id').primary();
        table.integer('matricula').notNullable();
        table.string('nome').notNullable();
        table.boolean('status').notNullable();
        table.integer('unidade').notNullable(); //fk unidade
        table.enu('tipo_perfil', ['ATENDENTE', 'EXAMINADOR', 'ADMINISTRADOR', 'DIRETOR']).notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('perfil');

}