const mysql = require('mysql');

const myDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // leave this empty
    database: '' // specify the name of your database
});

myDB.connect((err) => {
    if (err) throw err;
    console.log("Successfully connected to MySQL Server!");
});

module.exports = myDB;