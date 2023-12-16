

//invoke express like a function 
const express = require('express')
const app = express();
// Import the airportsData from the external file
const airportsData = require('./airportData')

//IF WE WANT TO POST (additional things included below)
////POST: middleman for posts: You need this line so that your app parses the request body to json by default:
// app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // '*' allows access from any origin
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

//tell where express will run:
app.set('port', process.env.PORT || 3000);

//app.local === global variable
app.locals.title = 'Airport Data';



// ... rest of your routes ...




//first endpt - homepage - where we can get the data for all the airports
//that display the data for drop down menu
app.get('/', (request, response) => {
    //this is the backend
    console.log(`Someone hit the endpoint at ${Date.now()}`)
    
    //this is what shows on the front end
    response.send(airportsData);
});

// // 2nd endpt - for the specific airport details? I think! like /api/v1/:airports or based on :id?
// app.get('/api/v1/airports', (request, response) => {
    //     const pets = app.locals.airports
    //     //send a response, this is context type expression
    //     //saying hey, whoever is hitting my api, we're giving this
    //     response.json({ airports })
    
    //     console.log("request.params:",request.params) //see it in the terminal:request.params: { id: '3' } ...reaches in to dynamic url, to use those 
    //     // const { id } = request.params; //can do this to replace, request.params.id to id in line below
    
    //     //bc the url is a string, the numbers should be strings... can stringify (below) or change it in the data
    //     const pet = app.locals.airports.find(airport => airport.id === request.params.id);
    
    //   //if you want to send the status code, do sendStatus
    // //if just sending raw error with no body: just send status
    //     return pet ? 
    //       response.status(200).json(pet)
    //       : response.sendStatus(404)
    //   })
    
    app.listen(app.get('port'), () => {
        console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
    });
    
//IF WE WANT TO USE POST:


// //POST:
// app.post('api/v1/pets', (request, response) => {
//     //uu ids - there are libraries/packages - university of ids
//     //you need a true hash value: https://www.uuidgenerator.net/ 
//     const id = Date.now()
//     const { name, type } = request.body //destructure
  
//     //same thing as above!
//     //if you want to work through kayla destructuring - good practice
//     // const name = request.body.name
//     // const type = request.body.type
  
//     // console.log("request.body",request.body)
//     console.log(app.locals.pets)
//     app.locals.pets.push({ id, name, type})
//     //successful post, you get a 201 or an object
//     response.send(201).json({ id, name, type})
//   })
  
//   app.listen(app.get('port'), () => {
//     console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
//   });gi
