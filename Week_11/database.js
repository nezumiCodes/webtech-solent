const mysql = require('mysql');
//require('dotenv').config();
//let db_pass = process.env.DATABASE_PASS;

const myDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'contact_data' // specify the name of your database
});

myDB.connect((err) => {
    if (err) throw err;
    console.log("Successfully connected to MySQL Server!");
});

module.exports = myDB;
