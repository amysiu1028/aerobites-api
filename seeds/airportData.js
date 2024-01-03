const businesses = require('../data/businesses');
const terminals = require('../data/terminals');
const airports = require('../data/airport');

//
//trx: trx object is passed down to other functions (like createTerminal) that are part of the same transaction, ensuring that all operations within those functions are grouped within the transaction scope.
//database transactions, the use of trx (transaction object) is mainly about ensuring atomicity, consistency, isolation, and durability (ACID properties). Transactions are commonly used when you have multiple database operations that should be treated as a single unit of work. The goal is to either commit all changes to the database or rollback (undo) all changes if an error occurs during any part of the process.


//when you're outside the seed function, such as in your CRUD operations or other parts of your application, you may need to explicitly use knex.transaction and pass trx

const createAirport = async (knex, airport) => {
  return knex.transaction(async (trx) => {
    try {
      const relationAirportId = await trx('airports').insert({
        name: airport.name,
        isFavorite: airport.isFavorite,
      }, 'id');

      const terminalArrayPromise = terminals.map(terminal => createTerminal(trx, relationAirportId, terminal));
      await Promise.all(terminalArrayPromise);
      await trx.commit(); // Commit the transaction if everything is successful
    } catch (error) {
      await trx.rollback(error); // Rollback the transaction if an error occurs
    }
  });
};

const createTerminal = async (knex, relationAirportId, terminal) => {
  return knex.transaction(async (trx) => {
    try {
      const terminalId = await trx('terminals').insert({
        airport_id: relationAirportId[0].id,
        terminalName: terminal.terminalName,
      }, 'id');

      //By passing trx to the createBusinesses function, you're telling it to perform the database operations within the context of the ongoing transaction. Any database changes made within this function (in this case, adding terminal data for each terminal) will be part of the same transaction object/unit passed down from createAiports
      const businessesArrayPromise = businesses.map(business => createBusinesses(trx, {
        terminal_id: terminalId[0].id,
        businessName: business.businessName,
      }));
      await Promise.all(businessesArrayPromise);
      await trx.commit(); // Commit the transaction if everything is successful
    } catch (error) {
      await trx.rollback(error); // Rollback the transaction if an error occurs
    }
  });
};

const createBusinesses = async (knex, businesses) => {
  await knex('businesses').insert(businesses);
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


// Promise.all is a method in JavaScript that takes an array of promises and returns a single promise. 
//each promise in the airportPromises array should resolve with an object that contains airport data, terminal data, and business data for each airport. Each promise represents the completion of the createAirport function for a specific airport.


//Promise.all is an asynchronous operation. It returns a new promise that is fulfilled with an array of the results when all of the input promises passed to it have been fulfilled, or it is rejected with the reason of the first promise that is rejected.

// When you call Promise.all, it doesn't block the execution of the JavaScript code. Instead, it allows you to handle the resolution or rejection of multiple promises concurrently. The Promise.all call itself returns a promise, and you can use await or .then() to handle the results once all the promises in the array have been settled (fulfilled or rejected).