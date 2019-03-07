exports.up = function (knex) {
  return knex.schema.createTable('carts', (table) => {
    table.increments().primary()
    table.integer('user_id').unsigned().references('id').inTable('users')
    table.boolean('is_paid').notNullable()
    table.float('sum').notNullable()
    table.dateTime('purchase_time')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('carts')
}
