import Knex from 'knex';

// Metodo up quais altereções agente que realizar no banco de dados

export async function up(knex: Knex) {
  // Crio a tabela
  return knex.schema.createTable('connections', table => {
    table.increments('id').primary();
    

    table.integer('user_id')
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');

    table.timestamp('created_at')
    // Pega o horario atual e salva no created_at
    .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
    .notNullable();
  });
}

// Se deu merda o que faço para volta

export async function down(knex: Knex){
  return knex.schema.dropTable('connections');

}