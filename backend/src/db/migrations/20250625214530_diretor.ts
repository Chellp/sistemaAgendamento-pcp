import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('diretor', (table) => {
        table.increments('cod').primary()
        table.integer('id_perfil').notNullable(); //fk perfil
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('diretor');
}