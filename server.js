

//invoke express like a function 
const express = require('express')
const app = express();

//IF WE WANT TO POST (additional things included below)
////POST: middleman for posts: You need this line so that your app parses the request body to json by default:
// app.use(express.json())

//tell where express will run:
app.set('port', process.env.PORT || 3000);

//app.local === global variable
app.locals.title = 'Airport Data';

app.locals.airports = [
    {
        "name": "Hartsfield-Jackson Atlanta International Airport",
        "terminals": [
            {
           "Domestic Terminal": ["Atlanta Chophouse", "Auntie Anne's", "Burger King", "IHOP express","Popeyes", "Starbucks", "TGI Fridays'", "We Juice It", "Z Market"]
            },
            {
            "Concourse A": ["Asian Chao", "Atlanta Bread & Bar", "Boar's Head Deli", "Caribou Coffee", "Chick-fil-A", "Dunkin Donuts", "McDonald's", "P.F. Chang's,", "Qdoba Mexican Grill", "Shake Shack"]
            },
            {
            "Concourse C": ["Auntie Anne's", "Carrabba's Italian Grill",  "Chick-Fil-A", "Five Guys Burgers and Fries"]
            }
        ]
    },
    {
        "name": "Dallas–Fort Worth International Airport",
        "terminals": [
            {
                "Terminal A": ["Bleu Mediterranean Bar", "The Salt Lick Bar-B-Que", "Pappadeaux Seafood Kitchen", "California Pizza Kitchen", "Auntie Anne's Pretzels", "Dunkin' Donuts", "Einstein Bros. Bagels", "McDonald's", "Popeye's", "Qdoba", "Starbucks"]
            },
            {
                "Terminal B": ["Cousins BBQ", "Hickory by Kent Rathbun", "Baskin-Robbins", "Caribou Coffee", "Smashburger", "Subway", "Panda Express"]
            },
            {
                "Terminal C": ["Bleu Mediterranean Bar", "Shake Shack", "Pappadeaux Seafood Bar", "Pappadeaux Seafood Kitchen", "Maggiano's", "Boar's Head Deli", "Chick-fil-A", "Chili's", "Dickey's Barbecue Pit", "Dunkin' Donuts", "McDonald's", "Whisk & Bowl"]
            }, 
            {
                "Terminal D": ["Hickory", "Artisan Market", "Bar Louie", "Applebee's", "Buffalo Wild Wings", "McDonald's", "Starbucks", "Whataburger"]
            },
        ]
    }
]

//first endpt - homepage - where we can get the data for all the airports
//that display the data for drop down menu
app.get('/', (request, response) => {
    //this is the backend
    console.log(`Someone hit the endpoint at ${Date.now()}`)
  
    //this is what shows on the front end
    response.send('Send something here');
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
