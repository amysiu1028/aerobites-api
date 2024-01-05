const knex = require('knex');
const config = require('./knexfile');
const knexConfig = config['development'];

module.exports = knex(knexConfig);