const bcrypt = require('bcryptjs');
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

  // const returnedUser = {
  //   user_id: user.user_id,
  //   username: user.username,
  //   phone_number: user.phone_number,
  //   plants: await getUsersPlants(user.user_id),
  // };
};

// Get users plants
// const getUsersPlants = async (id) => {
//   const plants = await db('plants as p')
//     .join('users_plants as upl', 'upl.plantId', 'p.plant_id')
//     .join('users as u', 'u.user_id', 'upl.userId')
//     .select(
//       'p.plant_id',
//       'p.nickname',
//       'p.species',
//       'p.h2o_frequency',
//       'p.image'
//     )
//     .where({ 'upl.userId': id })
//     .groupBy('p.plant_id')
//     .then((row) => {
//       return row;
//     });

//   return plants;
// };

// Get user by filter
const findUserBy = (filter) => {
  return db('users')
    .select('user_id', 'username', 'password')
    .where(filter)
    .orderBy('user_id');
};

// Add user
const addUser = async (user) => {
  const [id] = await db('users').insert(user);

  return getById(id);
};

// Delete user
const deleteUser = async (user_id) => {
  const toBeDeleted = await getById(user_id);
  await db('users').where({ user_id }).del();
  return toBeDeleted;
};

module.exports = {
  addUser,
  getAll,
  getById,
  // getUsersPlants,
  findUserBy,
  deleteUser,
};
