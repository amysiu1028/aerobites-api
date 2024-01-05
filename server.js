console.log('hello')
const express = require('express');
const app = express();
const cors = require('cors');
const knex = require('./knex');
const config = require('./knexfile.js');
const db = knex(config.production);
const PORT = process.env.PORT || 8080;
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
    console.log(`Server has started on port: ${PORT}`);
});