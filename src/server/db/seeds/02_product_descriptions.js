exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('product_descriptions').del()
    .then(function () {
      // Inserts seed entries
      return knex('product_descriptions').insert([{
        product_id: 1,
        title: 'Chair',
        meta_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        description: ''
      }, {
        product_id: 2,
        title: 'Sofa',
        meta_description: 'Morbi egestas elit justo, vitae ultricies lectus viverra sit amet.',
        description: ''
      }, {
        product_id: 3,
        title: 'Table',
        meta_description: 'Praesent vestibulum libero arcu, eu interdum risus gravida vitae.',
        description: ''
      }, {
        product_id: 4,
        title: 'Small table',
        meta_description: 'Etiam sed sapien convallis, hendrerit lectus ac, suscipit mauris.',
        description: ''
      }, {
        product_id: 5,
        title: 'Bed',
        meta_description: 'Morbi convallis tellus arcu, nec scelerisque ante congue ut.',
        description: ''
      }])
    })
}

