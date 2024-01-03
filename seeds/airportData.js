/**
//  * function expects knex as a parameter 
 * @param { import("knex").Knex } knex
 * 
//  * specifies that this function retursn a promise (means fx is asynchronous bc it returns a promise), resolves to void meaning it doesn't return any meaningful value
 * @returns { Promise<void> } 
 */

const businesses = require('../data/businesses')
const terminals = require('../data/terminals')
const airports = require('../data/airport')

//2. createAiport invoked async, using params, knex and aiport
//bc airport is top of the relational data, we need to create an id. 
//async and await makes sure that once we receive each airport data, then we can connect to our airports table
//In createAirport:
//1) the await knex('airports').insert(...) statement inserts an airport into the 'airports' table and 
//2)retrieves the newly inserted 'id' using 'id' as the second argument. This 'id' is stored in relationAirportId.

  const createAirport = async (knex, airport) => {
    const relationAirportId = await knex('airports').insert({
      name: airport.name,
      isFavorite: airport.isFavorite
    },'id')

//terminalPromises array - created by mapping over terminals array, invoking createTerminal for each terminal
//use await Promise.all to wait for all terminal promises to resolve, then proceed
    const terminalArrayPromise = terminals.map(terminal => createTerminal(knex, relationAirportId, terminal))
    await Promise.all(terminalArrayPromise);
  }

  //wait until we receive all terminal data
  const createTerminal = async (knex, relationAirportId, terminal) => {
    const terminalId = await knex('terminals').insert({
      airport_id: relationAirportId[0].id,
      terminalName: terminal.terminalName
    },'id')

    const businessesArrayPromise = businesses.map(business => createBusinesses(knex, {
        terminal_id: terminalId[0].id,
        businessName: business.businessName
    }))
    await Promise.all(businessesArrayPromise)
  }

  const createBusinesses = async (knex, businesses) => {// console.log("businesses", businesses)
    await knex('businesses').insert(businesses)

  }

exports.seed = async function (knex) {
    try {
  // Deletes ALL existing entries
    await knex('businesses').del()
    await knex('terminals').del()
    await knex('airports').del()

  //going from top down so using airports data and mapping through it
  //creating a function that using knex and aiport after mapping then going to line 14
    let airportPromises = airports.map(airport => {
      // console.log('Current airport:', airport);
      return createAirport(knex, airport)
    })
    
    return Promise.all(airportPromises)
    } 
    catch (error) {
      console.log(`Error seeding data: ${error}`);
    }
  }
