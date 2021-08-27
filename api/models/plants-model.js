const db = require('../../data/dbConfig');

// Get users plants
const getUsersPlants = async (user_id) => {
  return db('plants')
    .select('plant_id', 'nickname', 'h2o_frequency', 'species', 'image')
    .where({ user_id })
    .orderBy('plant_id');
};

// Get plant by id
const getPlantById = (plant_id) => {
  return db('plants')
    .select('plant_id', 'nickname', 'h2o_frequency', 'species', 'image')
    .where({ plant_id })
    .first();
};

// Create plant
const addPlant = async (plant) => {
  return db('plants').insert(plant);
};

// Update plant
const updatePlant = async (plant_id, changes) => {
  await db('plants').where({ plant_id }).update(changes);

  return getPlantById(plant_id);
};

module.exports = { getUsersPlants, getPlantById, addPlant, updatePlant };
