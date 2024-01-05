//configuration file:
//knexfile.js exports a configuration object for Knex.js (SQL query builder) for Node.js
//object contains settings from different environments: development and production.

/**
 //provides a type definition for exported object. Specifies that exported module is an object with string keys/values
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  //configures dev env, 
  development: {
    //uses PostgreSQL client 
    client: 'pg',
    // connection: 'postgres://localhost/airport',
    connection: 'postgres://zbsuzvgmcfznqc:2abeb62768d08d35bf47f56eb6d6bcdc19490966ed98f098bde6d720bee0b3b4@ec2-3-217-146-37.compute-1.amazonaws.com:5432/d1fup8eqep3j9s',
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    },
    //connection object specifies conxn details
    // connection: {
    //   // host: 'localhost', //may not need
    //   port: 5432,
    //   // user: 'postgres',
    //   // password: 'postgres',
    //   database: 'airports'
    //   //security reasons: user and pw in conxn object used for authentication when connection to a PostgreSQL
    // },
    useNullAsDefault: true, 
    pool: {
      min: 2,
      max: 10,
      // createTimeoutMillis: 60000, // 60 seconds (or adjust as needed)
    },
  },

  //condfigures production env 
  production: {
    //also uses PostgreSQL (postgresql) client.
    client: 'postgresql',
    connection: {
      //connection object includes the connection string from the DATABASE_URL environment variable

      //will be an encrypted variable that we can eventually find through heroku or vercel when we make our deployed link
      connectionString: "postgres://nlcqrnmrxohmda:b250518faa4d3d99c15a3ce9c0a665df2f4e3390bb9e8363317db9e8a8c7870c@ec2-54-156-8-21.compute-1.amazonaws.com:5432/d3n2mljlaf2r5g",
      // it sets up SSL with the option to reject unauthorized connections. 

      //SSL (Secure Sockets Layer):
      // protocol that ensures secure communication over a computer network. Secures data transfers b/t a user's web browser &  website.
      //in this case: used for securing connection b/t app and PostgreSQL database. 
      //Setting it to false allows the connection to proceed even if the certificate is not considered valid (self signed SSL certificate) - should only be done in trusted environments.

      ssl: {
        rejectUnauthorized: false,
      }
    },
    //pool object specifies the minimum and maximum number of connections in the pool,
    pool: {
      min: 2,
      max: 10, 
      // createTimeoutMillis: 60000, // 60 seconds (or adjust as needed)
    },
    //migrations object defines the table name for migrations.
    //It's a metadata table used by Knex.js to manage database migrations. 
    migrations: {
      tableName: 'knex_migrations'
    }

    // 'knex_migrations' is the default table name that Knex.js uses to store migration information. Knex.js automatically creates this table in your PostgreSQL database when you run migrations. You typically don't need to interact with this table directly; Knex.js manages it for you. It keeps track of which migrations have been applied, making it possible to determine the current state of the database schema. When you run knex migrate:latest or similar commands, Knex.js checks this table to apply any pending migrations.
  }

};


 // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },


  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }