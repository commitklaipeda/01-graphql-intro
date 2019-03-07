exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([{
        code: 'C0123',
        price: 60.50,
        rating: 5,
        is_active: true
      }, {
        code: 'B5559',
        price: 299.99,
        rating: 3,
        is_active: true
      }, {
        code: 'T51651',
        price: 100,
        rating: 4,
        is_active: false
      }, {
        code: 'T999',
        price: 69.99,
        rating: 5,
        is_active: true
      }, {
        code: 'B123456',
        price: 500,
        rating: 1,
        is_active: false
      }])
    })
}
