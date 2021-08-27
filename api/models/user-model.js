const db = require('../../data/dbConfig');

// Get all users
const getAll = () => {
  return db('users')
    .select('user_id', 'username', 'phone_number')
    .orderBy('user_id');
};

// Get user by id
const getById = (user_id) => {
  return db('users')
    .select('user_id', 'username', 'phone_number')
    .where({ user_id })
    .first();
};

// Get users plants
const getUsersPlants = (user_id) => {
  return db('plants')
    .select('plant_id', 'nickname', 'h2o_frequency', 'species', 'image')
    .where({ user_id })
    .first()
    .orderBy('plant_id');
};

// Get user by filter
const findUserBy = (filter) => {
  return db('users')
    .select('user_id', 'username', 'password')
    .where(filter)
    .orderBy('user_id');
};

// Add user
const addUser = async (user) => {
  return db('users').insert(user);
};

// Delete user
const deleteUser = async (user_id) => {
  const toBeDeleted = await getById(user_id);
  await db('users').where({ user_id }).del();
  return toBeDeleted;
};

// Update user
const updateUser = async (user_id, changes) => {
  await db('users').where({ user_id }).update(changes);

  return getById(user_id);
};

module.exports = {
  addUser,
  getAll,
  getById,
  getUsersPlants,
  findUserBy,
  deleteUser,
  updateUser,
};
