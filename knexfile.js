// Update with your config settings.

const { resolve } = require('path');

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: resolve(__dirname, 'src', 'database', 'database.sqlite'),
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: resolve(__dirname, 'src', 'database', 'migrations'),
    },
    seeds: {
      directory: resolve(__dirname, 'src', 'database', 'seeds'),
    },
    useNullAsDefault: true,
  },

};
