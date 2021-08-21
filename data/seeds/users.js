exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          user_id: 1,
          username: 'bill1',
          password: 'bill1',
          phone_number: 1231231234,
        },
        {
          user_id: 2,
          username: 'bill2',
          password: 'bill2',
          phone_number: 1231231234,
        },
      ]);
    });
};
