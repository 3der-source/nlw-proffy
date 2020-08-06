import knex from 'knex';
import path from 'path';

// path server para direcionar o caminho aonde dever fica os arquivos

// migrations - controla a versão do banco de dados

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  useNullAsDefault: true,
});

export default db;