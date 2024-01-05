console.log('hello')
const express = require('express');
const app = express();
const cors = require('cors');
const knex = require('./knex');
const db = knex(config.production);

const PORT = process.env.CUSTOM_PORT || 8050;
app.use(cors());

app.get('/', async (request, response) => {
    try {
        const airportData = await db.select().from('airports');
        response.status(200).json(airportData);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/terminals', async (request, response) => {
    try {
        const terminalData = await db.select().from('terminals');
        response.status(200).json(terminalData);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/businesses', async (request, response) => {
    try {
        const businessData = await db.select().from('businesses');
        response.status(200).json(businessData);
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(process.env.CUSTOM_PORT, "custom")
    console.log(process.env.PORT, "Port")
    console.log(process.env, "env")
    console.log(`Server has started hello world on port: ${PORT}`);
});

// Uncomment the following section if you plan to handle SIGTERM for graceful shutdown
// process.on('SIGTERM', () => {
    //   server.close(() => {
        //     knex.destroy();
        //   });
        // });
        
        //EXPRESS:
        // Express.js application, you've set up a server that listens on localhost:8080. This server acts as the backend for your application, handling incoming HTTP requests and providing responses. 
        //knex is a query builder where you can query execute/ask for/retreive specific data to be displayed. 
        
        
        //setting up express middleware layer for Node.js to build web app and APIs. Allows a  way to handle HTTP requests and manage routes, perform various tasks.
        
        // imports the Express.js - allowing you to create a web server and define route
        // const express = require('express')
        
        // // Creates an instance of the Express application. app is the main object you use to configure and define your web server.
        // const app = express()
        
        // // Imports the CORS middleware. CORS is a security feature implemented by web browsers to control access to resources on a web page from different origins. 
        // //helps handle CORS-related headers in HTTP requests.
        // const cors = require('cors')
        
        // //Imports the Knex.js instance. 
        // const knex = require('./knex')
        
        //sets express application/middleman port to 8080, this is where it'll listen for incoming requests on port 8080
        // app.set('port',8080)
        // const PORT = process.env.PORT || 8080;
        
        
        
        
        //app.use adds a middleware fx to express.js application
        // app.use(cors())
        
        ///api/v1/airports - should change to v1?
        
        //CRUD methods all happening at these endpts?
        //server-side script where an API endpoint for retrieving airport data is defined. 
        //Knex is being used as a query builder to interact with the database. Knex is selecting all columns from airport data. 
        // this query is retrieving data from that specific table. Migrations in Knex are scripts that help manage database schema changes, including creating and altering tables. 
        
        //setting root path - home page endpt
        // app.get('/', async(request, response) => {
        //     // response.send('Hello, this is the root path!');
        //     const airportData = await knex.select().from('airports')
        //     response.status(200).json(airportData)
        //   })
        
        // goal is to display only the airport names on the page load, you should retrieve data specifically from the 'airports' table. In your case, you have an endpoint that fetches data from the 'airports' table:
        //
        // app.get('/terminals', async(request, response) => {
        //     // response.send('This is the airport details page')
        //     const airportData = await knex.select().from('terminals')
        //     response.status(200).json(airportData)
        // })
        
        // app.get('/businesses', async(request, response) => {
        //     // response.send('This is the airport details page')
        //     const airportData = await knex.select().from('businesses')
        //     response.status(200).json(airportData)
        // })
        //above:
        //airportData is the name of the table we will be migrating (using knex to migrate and create the table over in postgres) to our db.
        //knex.js is the file you'll be migrating data 
        
        //when you use knex.select().from('airportData'), it implies that there should be a table named 'airportData' in your PostgreSQL database.
        //in your PostgreSQL database, you need to have a table named 'airportData' that contains the data you want to query. The structure of this table should match the expected schema, and it should have been created using Knex.js migrations or another method.
        //so what you would have in your Knex.js migration file (e.g., 20220101000000_create_airport_data_table.js)
        
        //The app.listen function in Express.js is used to bind and listen for connections on the specified host and port.
        // app.listen(PORT, () => {
        //     console.log(`server has started on port ${PORT}`)
        // })
        
        // process.on('SIGTERM', () => {
        //     server.close(() => {
        //       knex.destroy();
        //     });
        //   });
        //cors info:
        // CORS (Cross-Origin Resource Sharing) is a mechanism that allows a server to specify who can access its resources.
        
        //in absence of cors,  default behavior of web browsers to prevent cross-origin requests as a security measure.
        //-  web browsers restrict web pages from making requests to domains different from the one that served the web page.
        
        //CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers to control which web pages are allowed to access resources (like data) on a different domain. It's designed to prevent malicious websites from making unauthorized requests on behalf of a user. When you configure CORS, you specify which domains are allowed to access the resources, anhd you can control things like allowed HTTP methods and headers.