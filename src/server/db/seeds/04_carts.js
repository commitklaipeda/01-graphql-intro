exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('carts').del()
    .then(function () {
      // Inserts seed entries
      return knex('carts').insert([{
        user_id: 1,
        purchase_time: new Date(),
        is_paid: true,
        sum: 99.99
      }, {
        user_id: 1,
        purchase_time: null,
        is_paid: false,
        sum: 200.01
      }, {
        user_id: 1,
        purchase_time: new Date(),
        is_paid: true,
        sum: 0.5
      }, {
        user_id: 2,
        purchase_time: null,
        is_paid: false,
        sum: 1000
      }, {
        user_id: 2,
        purchase_time: new Date(),
        is_paid: true,
        sum: 100.10
      }, {
        user_id: 2,
        purchase_time: new Date(),
        is_paid: true,
        sum: 22.22
      }, {
        user_id: 3,
        purchase_time: new Date(),
        is_paid: true,
        sum: 333.99
      }, {
        user_id: 4,
        purchase_time: null,
        is_paid: false,
        sum: 0
      }])
    })
}
