import Knex from 'knex';

// Metodo up quais altereções agente que realizar no banco de dados

export async function up(knex: Knex) {
  // Crio a tabela
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('avatar').notNullable();
    table.string('whatsapp').notNullable();
    table.string('bio').notNullable();
  })
}

// Se deu merda o que faço para volta

export async function down(knex: Knex){
  return knex.schema.dropTable('users');

}