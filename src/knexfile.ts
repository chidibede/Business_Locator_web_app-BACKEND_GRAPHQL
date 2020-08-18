// dotenv makes it easy to work with .env files which hides sensitive data from the public
require('dotenv').config();

export = {
  // object houses the different configurations for the different environments
  development: {
    client: "pg",
    connection: {
      port: process.env.DATABASE_PORT,
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_ACCESS_KEY,
    },
    pool: {
      min: 1,
      max: 3,
    },

    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URI,
    pool: {
      min: 1,
      max: 3,
    },

    migrations: {
      tableName: "knex_migrations",
    },
  },
};
