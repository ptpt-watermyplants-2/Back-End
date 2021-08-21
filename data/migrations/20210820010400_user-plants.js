exports.up = function (knex) {
  return knex.schema.createTable('user_plants', (tbl) => {
    tbl.increments();
    tbl
      .integer('userId')
      .unsigned()
      .notNullable()
      .references('user_id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl
      .integer('plantId')
      .unsigned()
      .notNullable()
      .references('plant_id')
      .inTable('plants')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('user_plants');
};
