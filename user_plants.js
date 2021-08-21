exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user_plants')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('user_plants').insert([
        { id: 1, userId: 1, plantId: 1 },
        { id: 2, userId: 2, plantId: 2 },
      ]);
    });
};
