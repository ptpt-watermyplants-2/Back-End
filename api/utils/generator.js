const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config');

module.exports = function (user) {
  const payload = {
    sub: user.user_id,
    username: user.username,
    role: user.role,
  };

  const options = {
    expiresIn: '1d',
  };

  return jwt.sign(payload, jwtSecret, options);
};
