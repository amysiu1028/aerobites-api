const businesses = require('../data/businesses');
const terminals = require('../data/terminals');
const airports = require('../data/airport');

//when you're outside the seed function, such as in your CRUD operations or other parts of your application, you may need to explicitly use knex.transaction and pass trx

const createAirport = async (knex, airport) => {
  return knex.transaction(async (trx) => {
    try {
      const airportTerminalLinkId = await trx('airports').insert({
        //id that autoincrements is [0]
        name: airport.name, //[1]
        isFavorite: airport.isFavorite, //[2]
      }, 'id') // Get the inserted airport record with its ID
      
      const terminalArrayPromise = terminals
      .filter(terminal => {
        console.log("terminal.airport_id",terminal.airport_id)
        console.log("airportTerminalLinkId[0].id ",airportTerminalLinkId[0].id)
        return terminal.airport_id === airportTerminalLinkId[0].id})
      .map(terminal => createTerminal(trx, terminal));
      await Promise.all(terminalArrayPromise);
      await trx.commit(); // Commit the transaction if everything is successful
      console.log(`Successfully inserted airport: ${airport.name}`);
    } catch (error) {
      await trx.rollback(error); // Rollback the transaction if an error occurs
    }
  });
};

const createTerminal = async (knex, terminal) => {
  return knex.transaction(async (trx) => {
    try {
      const terminalBusinessLinkId = await trx('terminals').insert({
        airport_id: terminal.airport_id,
        terminalName: terminal.terminalName,
      },'id');

      const businessesArrayPromise = businesses
        .filter(business => {
          // console.log("business.terminal_id",business.terminal_id)
          // console.log("terminalBusinessLinkId[0]",terminalBusinessLinkId[0].id)
          return business.terminal_id === terminalBusinessLinkId[0].id})
        .map(business => createBusinesses(trx, business));
      await Promise.all(businessesArrayPromise);
      await trx.commit(); // Commit the transaction if everything is successful
      console.log(`Successfully inserted terminals: ${terminal.businessName}`);
    } catch (error) {
      await trx.rollback(error); // Rollback the transaction if an error occurs
      console.error(`Error inserting terminal: ${terminal.terminalName}`, error);
    }
  });
};

const createBusinesses = async (knex, business) => {
  return knex.transaction(async (trx) => {
    try {
      await trx('businesses').insert({
        terminal_id: business.terminal_id,
        businessName: business.businessName,
      });
      await trx.commit(); // Commit the transaction if everything is successful
      console.log(`Successfully inserted business: ${business.businessName}`);
    } catch (error) {
      await trx.rollback(error); // Rollback the transaction if an error occurs
      console.error(`Error inserting business: ${business.businessName}`, error);
    }
  });
};

//exports.seed = is treated as a transaction by knex, seed fx already operates w/in a transaction - When you're working with the seed function, Knex automatically provides a transaction object (trx) for you, and it is implicitly available within the seed. You don't need to explicitly pass it as an arg

//so then here we are putting the data operations we had made in one transaction.. into this seed (which implicity lives in the same transaction container), making one unit: 
exports.seed = async function (knex) {
  try {
    // Deletes ALL existing entries
    await knex('businesses').del();
    await knex('terminals').del();
    await knex('airports').del();

    let airportPromises = airports.map(airport => createAirport(knex, airport));
    // console.log('airportPromises ',airportPromises)
    // await Promise.all(airportPromises)
    // console.log('airportPromises ',airportPromises)
    return Promise.all(airportPromises);
  } catch (error) {
    console.log(`Error seeding data: ${error}`);
  }
};


//extra explanation:
// In your seed script, you're using the Knex query builder to perform operations (deleting existing entries and inserting new data) as part of the seeding process. The important part is that the actual data operations (inserts and deletes) are happening within the transactions you defined in your createAirport, createTerminal, and createBusinesses functions.

// By calling these functions within the seed script and mapping over the airports to create promises for each airport, you are essentially grouping these operations under one transaction. The Promise.all statement ensures that all these transactions are executed as a single unit, and if any part of the process encounters an error, the entire unit (all transactions) will be rolled back.

// This is a good practice for database seeding, especially when dealing with relational data, as it helps maintain data consistency and integrity. If any part of the seeding process fails, you won't end up with a partially seeded database.


//memory heap overload errors:
// The memory heap overload errors you encountered might be related to the fact that your database seeding involves a large number of database operations (such as inserting, updating, or deleting records) typically results in changes being committed to the database. Without transactions, these changes are committed immediately after each operation. -> can lead to inefficient memory usage, especially when dealing with a large dataset.

// Transactions provide a way to group multiple database operations into a single unit of work. When you use a transaction, changes are not committed to the database until the entire transaction is completed. This ensures that either all operations within the transaction are successful, or none of them are applied. It helps maintain the atomicity, consistency, isolation, and durability (ACID properties) of the database.



//my own notes:
// Promise.all is a method in JavaScript that takes an array of promises and returns a single promise. 
//each promise in the airportPromises array should resolve with an object that contains airport data, terminal data, and business data for each airport. Each promise represents the completion of the createAirport function for a specific airport.

//Promise.all is an asynchronous operation. It returns a new promise that is fulfilled with an array of the results when all of the input promises passed to it have been fulfilled, or it is rejected with the reason of the first promise that is rejected.

// When you call Promise.all, it doesn't block the execution of the JavaScript code. Instead, it allows you to handle the resolution or rejection of multiple promises concurrently. The Promise.all call itself returns a promise, and you can use await or .then() to handle the results once all the promises in the array have been settled (fulfilled or rejected).