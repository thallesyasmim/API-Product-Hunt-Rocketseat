
exports.up = knex => knex.schema.createTable('products', table => {
        table.increments('id')
        table.string('title').notNullable()
        table.string('description').notNullable()
        table.string('url').notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now());
  })


exports.down = knex => knex.schema.dropTable('products')
