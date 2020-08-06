import Knex from 'knex';

// Metodo up quais altereções agente que realizar no banco de dados

export async function up(knex: Knex) {
  // Crio a tabela
  return knex.schema.createTable('class_schedule', table => {
    table.increments('id').primary();

    table.integer('week_day').notNullable();
    table.integer('from').notNullable();
    table.integer('to').notNullable();
    

    table.integer('class_id')
    .notNullable()
    .references('id')
    .inTable('classes')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
  });
}

// Se deu merda o que faço para volta

export async function down(knex: Knex){
  return knex.schema.dropTable('class_schedule');

}