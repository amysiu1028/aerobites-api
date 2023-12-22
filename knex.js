
//imports knex library; knex is a SQL query builder for node that provides a clean and flexible syntax for interactring with relationship databases
const knex = require('knex')

// Imports the configuration object for Knex.js. The knexfile typically contains configuration settings
const config = require('./knexfile')

//Specifies the environment for which you want to load the configuration. In this case, it's set to 'development'. This is used to select the appropriate configuration settings from the knexfile
// const environment = 'development'

//Calls the config function with the specified environment to retrieve the configuration settings for that environment.
// Use square brackets to access the environment-specific configuration (bc environment is a variable containing the environment name (e.g., 'development').

const knexConfig = config['development']

//: Exports a Knex.js instance configured with the settings from knexConfig. This can be used throughout app to interact with the database
module.exports = knex(knexConfig)

//these lines set up and export a configured Knex.js based on the specified environment, so the data from development stage (before page load) to perform database opereations (Changes to the data)