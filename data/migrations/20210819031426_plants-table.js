exports.up = function (knex) {
  return knex.schema.createTable('plants', (tbl) => {
    tbl.increments('plant_id');
    tbl.string('nickname');
    tbl.string('species');
    tbl.string('h2o_frequency');
    tbl.string('image');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('plants');
};
