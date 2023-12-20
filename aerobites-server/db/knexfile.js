// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/airports',
      migrations: {
        directory: './db/migrations'
      },
      seeds: {
        directory: './db/seeds/dev'
      },
      useNullAsDefault: true
    }
  };
