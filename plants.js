exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('plants')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('plants').insert([
        {
          plant_id: 1,
          nickname: 'Plant1',
          species: 'tomato',
          h2o_frequency: '12 hrs',
          image: '',
          user_id: 1,
        },
        {
          plant_id: 2,
          nickname: 'Plant2',
          species: 'bell pepper',
          h2o_frequency: '1 week',
          image: '',
          user_id: 2,
        },
      ]);
    });
};
