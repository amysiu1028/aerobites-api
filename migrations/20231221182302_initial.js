/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('airports', function (table) {
        table.increments('id').primary();
        table.string('name', 200).notNullable();
        table.boolean('isFavorite').defaultTo(false);
        })
        .then(() => {
            return knex.schema.createTable('terminals', function (table) {
                table.increments('id').primary();
                table.integer('airport_id').unsigned().references('id').inTable('airports');
                table.string('terminalName', 200).notNullable();
            });
        })
        .then(() => {
            return knex.schema.createTable('businesses', function (table) {
                table.increments('id').primary();
                table.integer('terminal_id').unsigned().references('id').inTable('terminals');
                table.string('businessName', 200).notNullable();
            });
        })
    };

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('businesses')
    .then(() => {
      return knex.schema.dropTable('terminals');
    })
    .then(() => {
      return knex.schema.dropTable('airports');
    });
};