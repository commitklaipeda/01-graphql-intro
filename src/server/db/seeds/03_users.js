exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([{
        name: 'Vardas',
        surname: 'Pavardenis',
        password: 'D5oh4hZrISsONAr03pH0',
        age: 18,
        address: 'Liepų g. 1',
        is_active: true,
        registration_time: new Date()
      }, {
        name: 'Jonė',
        surname: 'Jonauskaitė',
        password: 'NKwnmDW7ippQfy3UFpdj',
        age: 30,
        address: 'Jūros g. 2',
        is_active: true,
        registration_time: new Date()
      }, {
        name: 'Petras',
        surname: 'Petravičius',
        password: '1xH0OKkMU0bzdx1a7Tm6',
        age: 37,
        address: 'Šaltibarščių g. 3',
        is_active: true,
        registration_time: new Date()
      }, {
        name: 'Kazys',
        surname: 'Kazlauskas',
        password: '3WPGwVNv5C9Bs1pqooAt',
        age: 23,
        address: 'Silicon valley 99',
        is_active: true,
        registration_time: new Date()
      }, {
        name: 'Kristina',
        surname: 'Petrauskaitė',
        password: '0uL4qp9XlABJ3rvZAn0N',
        age: 60,
        address: 'Baltijos pr. 123',
        is_active: true,
        registration_time: new Date()
      }])
    })
}
