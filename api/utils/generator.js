const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../../config');

module.exports = function (user) {
  const payload = {
    id: user.user_id,
    username: user.username,
    phone_number: user.phone_number,
  };

  const options = {
    expiresIn: '1d',
  };

  return jwt.sign(payload, jwtSecret, options);
};
