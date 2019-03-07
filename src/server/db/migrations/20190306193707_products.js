exports.up = function (knex) {
  return knex.schema.createTable('products', (table) => {
    table.increments().primary()
    table.string('code').notNullable()
    table.float('price').notNullable()
    table.integer('rating').unsigned()
    table.boolean('is_active').notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('products');
}
