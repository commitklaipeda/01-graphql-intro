exports.up = function (knex) {
  return knex.schema.createTable('cart_items', (table) => {
    table.increments().primary()
    table.integer('cart_id').unsigned().references('id').inTable('carts')
    table.integer('product_id').unsigned().references('id').inTable('products')
    table.integer('quantity').notNullable()
    table.dateTime('time_added').notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('cart_items');
}
