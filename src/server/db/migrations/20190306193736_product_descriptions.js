exports.up = function (knex) {
  return knex.schema.createTable('product_descriptions', (table) => {
    table.increments().primary()
    table.integer('product_id').unsigned().references('id').inTable('products')
    table.string('title').notNullable()
    table.string('meta_description')
    table.text('description')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('product_descriptions')
}
