const businesses = require('../data/businesses');
const terminals = require('../data/terminals');
const airports = require('../data/airport');

const createAirport = async (knex, airport) => {
  return knex.transaction(async (trx) => {
    try {
      const airportTerminalLinkId = await trx('airports').insert({
        name: airport.name, 
        isFavorite: airport.isFavorite, 
      }, 'id')
      
      const terminalArrayPromise = terminals
      .filter(terminal => {
        return terminal.airport_id === airportTerminalLinkId[0].id})
      .map(terminal => createTerminal(trx, terminal));
      await Promise.all(terminalArrayPromise);
      await trx.commit(); 
    } catch (error) {
      await trx.rollback(error); 
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
          return business.terminal_id === terminalBusinessLinkId[0].id})
        .map(business => createBusinesses(trx, business));
      await Promise.all(businessesArrayPromise);
      await trx.commit(); 
    } catch (error) {
      await trx.rollback(error); 
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
      await trx.commit(); 
    } catch (error) {
      await trx.rollback(error); 
      console.error(`Error inserting business: ${business.businessName}`, error);
    }
  });
};

exports.seed = async function (knex) {
  try {
    await knex('businesses').del();
    await knex('terminals').del();
    await knex('airports').del();

    let airportPromises = airports.map(airport => createAirport(knex, airport));
    return Promise.all(airportPromises);
  } catch (error) {
    console.log(`Error seeding data: ${error}`);
  }
};