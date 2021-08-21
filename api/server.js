const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const usersRouter = require('./router/usersRouter');
const authRouter = require('./auth/auth-router');
const plantsRouter = require('./router/plantsRouter');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/users', usersRouter);
server.use('/api', authRouter);
server.use('/api/plants', plantsRouter);

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
