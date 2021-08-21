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

  testing: {},
  staging: {},

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
    migrations: { directory: './data/migrations' },
    seeds: { directory: './data/seeds' },
  },
};
