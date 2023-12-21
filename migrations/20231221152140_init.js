//migrations = version controls of our database 
//They are single, timestamped files that each represent a change to your database schema. 

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    //creating an airports table
    return knex.schema.createTable('airports', function (table) {
        //adds an id column, name, boolean

        //increment method: defines an auto-incrementing integer column named 'id'.
        //.primary(): Specifies that the 'id' column is the primary key for the table. 
        // primary key uniquely identifies each row in the table - helps w/ efficient data retrieval.
        table.increments('id').primary();
        //This creates a 'name' column, specifying that the values in this column should be strings. 
        //The .notNullable() method ensures that the 'name' column cannot contain null values.
        //setting the max length of string. Important for data integrity, performatnce, memory usage, etc
        table.string('name', 200).notNullable();
        //This creates an 'isFavorite' column, specifying that the values in this column should be boolean (true or false). 
        //The .defaultTo(false) sets a default value of false for the 'isFavorite' column, 
        table.boolean('isFavorite').defaultTo(false);
        //chained with .then, indicate that after the airports table is created, the next set of operations should be performed.
        table.timestamp(true,true); //adds create_at and updated_at columns to the table. These are used to track creation and last update times. when you run a migration with this line, it will show timestamp of when migration is executed. Best practice is to add them to end of each table.
        })
        .then(() => {
            return knex.schema.createTable('terminals', function (table) {
                table.increments('id').primary();
                //unsigned - makes sure this column doesn't store negative #s
                //common practice done in relational database establishment: where airport_id will contain alues that correspond to the primary key id values in airports table (creating a connxn b/t the 2) 
                table.integer('airport_id').unsigned().references('id').inTable('airports')
                table.string('terminalName', 200).notNullable();
                table.timestamp(true,true);
            });
        })
        .then(() => {
            return knex.schema.createTable('businesses', function (table) {
                table.increments('id').primary();
                table.integer('terminal_id').unsigned().references('id').inTable('terminals');
                table.string('businessName', 200).notNullable();
                table.timestamp(true,true);
            });
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
//It provides a way to undo the changes made by the exports.up function when you need to rollback a migration. important for maintaining reversibility

//it's essential to drop tables in the reverse order to avoid foreign key constraints. 
exports.down = function(knex) {
    return knex.schema.dropTable('businesses')
    .then(() => {
      return knex.schema.dropTable('terminals');
    })
    .then(() => {
      return knex.schema.dropTable('airports');
    });
};


//explanation:

//creating relational ids:
// Each table references to the previous table's foreign key (connecting the tables). Telling us in this provided schema that airports is at the top level, then business, and then terminals.
// This approach allows for nested or hierarchical relationships. For example, you can determine which 'airport' a 'business' belongs to by traversing the relationship through 'terminals.' This can be useful for organizing and querying data in a structured manner.

//so in the server.js (where I use express), I will be query selecting a particular column (like businessName) of the table: businesses to display that with using knex.... so knex.select('business'):
// below:
// app.get('/businesses', async (request, response) => {
//     try {
//         // Use knex.select to retrieve specific columns from the 'businesses' table
//         const businessesData = await knex.select('businessName').from('businesses');
//         response.status(200).json(businessesData);
//     } catch (error) {
//         response.status(500).json({ error });
//     }
// });

//async keyword: defines fx that handles async operations. Tells js that fx contains async code, allows use of await in fx
//await keyword: used to wait for a promise to resolve. So it pauses the function execution until the promise is resovled (so once response is received, we can proceed to next part of fx rather than proceedfing w. no data => usu results in error.)
//try { } block = contains code contains code that might through an exception/error.
//catch block executes if error/exception is received/thrown in try block. It's used to handle errors. So if there is an error during async op (e.g database query error), catch executes, sends a 500 internal server error.

//express: User
// express is an intermediary/middle man that allows us to single handedly select specific data... like retreive one column/table? rather than all? 
//application framework that facilitates the creation of web servers and handling of HTTP requests.
// provides a set of tools and features to define routes, handle requests, and send responses.

//When you're working with databases, such as PostgreSQL, and using a query builder like Knex, you can use Express to define routes that correspond to different API endpoints. In each route handler, you can use Knex to interact with the database, perform queries, and retrieve specific data.

//, in summary, Express facilitates the creation of APIs, and when combined with Knex, it allows you to interact with the database and retrieve specific data based on the routes you define.