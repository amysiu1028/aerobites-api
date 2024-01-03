/**
 * @param { import("knex").Knex } knex
 * 
 * @returns { Promise<void> } 
 */


const terminals = require('../data/terminals')
const airports = require('../data/airport')
  // Deletes ALL existing entries

  const createAirport = async (knex, airport) => {
    // if (airport.name) {
    const relationAirportId = await knex('airports').insert({
      name: airport.name,
      isFavorite: airport.isFavorite
    },'id')
    
    // console.log("airport.terminals",airport.terminals)
    console.log("terminals",terminals)
    let terminalPromises = terminals.map(terminal => {
      return createTerminals(knex, {
        airport_id: relationAirportId[0].id,
        terminalName: terminal.terminalName
      })
    })
    return Promise.all(terminalPromises)
  } 
//   else {
//     console.log("Airport is null or undefined")
//     return Promise.resolve(); // Return a resolved promise or handle accordingly
//   }
// }
  const createTerminals = (knex, terminals) => {
    return knex('terminals').insert(terminals)
  }

exports.seed = async function (knex) {
  try {
    await knex('businesses').del()
    await knex('terminals').del()
    await knex('airports').del()

    // const relationAirportId = await knex('airports').insert([
    //       {
    //         name: "Hartsfield-Jackson Atlanta International Airport",
    //         isFavorite: false,
    //       },
    //     ],'id')
  // console.log("airports",airports)
    let airportPromises = airports.map(airport => {
      // console.log('Current airport:', airport);
      return createAirport(knex, airport)
    })
    
    return Promise.all(airportPromises)
    // const terminalData = [
    //   {
    //     airport_id: relationAirportId[0].id,
    //     terminalName: "Domestic Terminal",
    //   },
    //   {
    //     airport_id: relationAirportId[0].id,
    //     terminalName: "Concourse A",
    //   },
    //   {
    //     airport_id: relationAirportId[0].id,
    //     terminalName: "Concourse B",
    //   },
    //   {
    //     airport_id: relationAirportId[0].id,
    //     terminalName: "Concourse C",
    //   }
    // ]
    
    // const terminalIds = await knex('terminals').insert(terminalData,'id');
    
    // const businessData = [
    //   {
    //     terminal_id: terminalIds[0].id,
    //     businessName: "Atlanta Chophouse",
    //   },
    //   {
    //     terminal_id: terminalIds[0].id,
    //     businessName: "Auntie Anne's",
    //   }
    // ]
        
    // return knex('businesses').insert(businessData);
    } catch (error) {
      console.log(`Error seeding data: ${error}`);
    }
  }

// /**
//  * @param { import("knex").Knex } knex
//  * 
//  * @returns { Promise<void> } 
//  */

// exports.seed = function (knex) {
//   // Deletes ALL existing entries
//   return knex('airports').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('airports').insert([
//         {
//           name: "Hartsfield-Jackson Atlanta International Airport",
//           isFavorite: false,
//         },
//         {
//           name: "Dallas–Fort Worth International Airport",
//           isFavorite: false,
//         },
//       ]);
//     })
//     .then(function () {
//       return knex('terminals').insert([
//         {
//           airport_id: 1,
//           terminalName: "Domestic Terminal",
//         },
//         {
//           airport_id: 1,
//           terminalName: "Concourse A",
//         },
//         {
//           airport_id: 1,
//           terminalName: "Concourse B",
//         },
//         {
//           airport_id: 1,
//           terminalName: "Concourse C",
//         },
//         {
//           airport_id: 1,
//           terminalName: "Concourse D",
//         },
//         {
//           airport_id: 1,
//           terminalName: "Concourse E",
//         },
//         {
//           airport_id: 1,
//           terminalName: "Concourse T",
//         },
//         {
//           airport_id: 1,
//           terminalName: "Concourse F - international",
//         },
//         {
//           airport_id: 2,
//           terminalName: "Terminal A",
//         }
//       ]);
//     })
//     .then(function () {
//       return knex('businesses').insert([
//         {
//           terminal_id: 1,
//           businessName: "Atlanta Chophouse",
//         },
//         {
//           terminal_id: 1,
//           businessName: "Auntie Anne's",
//         },
//         // Add businesses for other terminals
//       ]);
//     });
// };

