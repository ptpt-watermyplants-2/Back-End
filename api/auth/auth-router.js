const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/user-model');
const tokenBuilder = require('../utils/generator');
const {
  checkUsernameAvailable,
  checkAuthPayload,
} = require('../middleware/validation');

// Add new user
router.post(
  '/register',
  checkUsernameAvailable,
  checkAuthPayload,
  (req, res, next) => {
    let newUser = req.body;

    const hashRounds = process.env.BCRYPT_ROUNDS || 8;
    const hashedPassword = bcrypt.hashSync(newUser.password, hashRounds);

    newUser.password = hashedPassword;

    if (!newUser.username || !newUser.password) {
      res.status(401).json({ message: 'Username and password required' });
    } else {
      User.addUser(newUser)
        .then((created) => {
          res
            .status(201)
            .json({ message: 'User has been created, please log in.' });
        })
        .catch(next);
    }
  }
);

// Login user
router.post('/login', checkAuthPayload, (req, res, next) => {
  let { username, password } = req.body;

  User.findUserBy({ username })
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = tokenBuilder(user);

        res.status(200).json({ message: `Welcome ${user.username}`, token });
      } else {
        next({ status: 401, message: 'Invalid credentials' });
      }
    })
    .catch(next);
});

module.exports = router;
