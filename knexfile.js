const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: { directory: './data/migrations' },
  pool: {
    afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done),
  },
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: './dev.sqlite3' },
    seeds: { directory: './data/seeds' },
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
