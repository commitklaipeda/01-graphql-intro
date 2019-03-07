exports.up = function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments().primary()
    table.string('name').notNullable()
    table.string('surname').notNullable()
    table.string('password').notNullable()
    table.integer('age').unsigned()
    table.string('address').notNullable()
    table.boolean('is_active').notNullable()
    table.dateTime('registration_time')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('users')
}
