const knex = require('knex');
const { resolve } = require('path');

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
})

module.exports = connection;