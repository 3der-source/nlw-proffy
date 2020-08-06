import Knex from 'knex';

// Metodo up quais altereções agente que realizar no banco de dados

export async function up(knex: Knex) {
  // Crio a tabela
  return knex.schema.createTable('classes', table => {
    table.increments('id').primary();
    table.string('subject').notNullable();
    table.decimal('cost').notNullable();

    table.integer('user_id')
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
  });
}

// Se deu merda o que faço para volta

export async function down(knex: Knex){
  return knex.schema.dropTable('classes');

}