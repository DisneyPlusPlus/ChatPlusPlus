require("dotenv").config();

const localPgConnection = {
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
};

const dbConnection = process.env.DATABASE_URL || localPgConnection;

module.exports = {
  development: {
    client: "pg",
    connection: dbConnection,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    },
    useNullAsDefault: true
  },

  production = {
    client: "pg",
    connection: dbConnection,
    migrations: {
        directory: "./database/migrations"
    },
    seeds: {
        directory: "./databases/seeds"
    }
  }
};
