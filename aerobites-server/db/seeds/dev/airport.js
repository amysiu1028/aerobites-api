/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('airports').del()
    .then(function () {
      // Inserts seed entries
      return knex('airports').insert([
        {
          name: "Hartsfield-Jackson Atlanta International Airport",
          isFavorite: false,
        },
        {
          name: "Dallas–Fort Worth International Airport",
          isFavorite: false,
        },
      ]);
    })
    .then(function () {
      return knex('terminals').insert([
        {
          airport_id: 1,
          terminalName: "Domestic Terminal",
        },
        {
          airport_id: 1,
          terminalName: "Concourse A",
        },
        // Add terminals for Dallas–Fort Worth International Airport
      ]);
    })
    .then(function () {
      return knex('businesses').insert([
        {
          terminal_id: 1,
          businessName: "Atlanta Chophouse",
        },
        {
          terminal_id: 1,
          businessName: "Auntie Anne's",
        },
        // Add businesses for other terminals
      ]);
    });
};
