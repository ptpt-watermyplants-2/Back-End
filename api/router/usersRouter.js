const router = require('express').Router();
const restricted = require('../middleware/restricted');
const User = require('../models/user-model');
// const { restricted } = require('../middleware/restricted');

// Get all users
router.get('/', async (req, res, next) => {
  User.getAll()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      next({ status: 500, message: 'Error retrieving users' });
    });
});

// Get user by id
router.get('/:id', async (req, res, next) => {
  await User.getById(req.params.id)
    .then((user) => {
      if (!user) {
        next({ status: 404, message: 'User not found' });
      } else {
        res.json(user);
      }
    })
    .catch((err) => {
      console.log(err);
      next({ status: 500, message: 'Error getting user' });
    });
});

// Delete user
router.delete('/:id', restricted, (req, res, next) => {
  User.deleteUser(req.params.id)
    .then((deletedUser) => {
      res.status(200).json({ message: 'User has been deleted' });
    })
    .catch((err) => {
      console.log(err);
      next({ message: 'Error deleting user' });
    });
});

module.exports = router;
