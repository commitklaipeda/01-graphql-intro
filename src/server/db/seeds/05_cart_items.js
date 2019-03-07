exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cart_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('cart_items').insert([{
        cart_id: 1,
        product_id: 1,
        quantity: 2,
        time_added: new Date()
      }, {
        cart_id: 1,
        product_id: 2,
        quantity: 1,
        time_added: new Date()
      }, {
        cart_id: 1,
        product_id: 3,
        quantity: 5,
        time_added: new Date()
      }, {
        cart_id: 2,
        product_id: 4,
        quantity: 2,
        time_added: new Date()
      }, {
        cart_id: 2,
        product_id: 2,
        quantity: 1,
        time_added: new Date()
      }, {
        cart_id: 2,
        product_id: 3,
        quantity: 3,
        time_added: new Date()
      }, {
        cart_id: 2,
        product_id: 5,
        quantity: 5,
        time_added: new Date()
      }, {
        cart_id: 3,
        product_id: 1,
        quantity: 1,
        time_added: new Date()
      }, {
        cart_id: 3,
        product_id: 2,
        quantity: 2,
        time_added: new Date()
      }, {
        cart_id: 3,
        product_id: 3,
        quantity: 3,
        time_added: new Date()
      }])
    })
}
