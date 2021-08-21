const dotenv = require('dotenv').config();

module.exports = {
  development: {
    client: 'sqlite3',
    debug: true,
    connection: {
      filename: './dev.sqlite3',
    },

    useNullAsDefault: true,
    migrations: { directory: './data/migrations' },
    seeds: { directory: './data/seeds' },
    pool: {
      afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done),
    },
  },

  staging: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    useNullAsDefault: true,
    debug: true,
    pool: {
      min: 2,
      max: 10,
    },
    searchPath: ['knex', 'public'],
    migrations: {
      directory: './data/migrations',
    },
    acquireConnectionTimeout: 10000,
  },

  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 2,
      max: 10,
    },
    searchPath: ['knex', 'public'],
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    acquireConnectionTimeout: 10000,
  },
};
