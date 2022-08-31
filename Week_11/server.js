'use strict';
require('dotenv').config();
const express = require('express');
const path = require('path');
const mysql = require('mysql');
const myDB = require('./database');

let port = 5000 || 3000 || 8080;

const app = express();

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs'); 
app.use(express.static(__dirname+'/public'));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req,res) => {
    res.set('Content-type','text/html');
    res.render('index');
});

app.get("/houses", (req,res) => {
    res.set('Content-type','text/html');
    res.render('houses');
});

app.get("/contact", (req,res) => {
    res.set('Content-type','text/html');
    res.render('contact');
});

app.get("/form-sent", (req,res) => {
    res.set('Content-type','text/html');
    res.render('form-sent');
});

app.get('*',(req,res) => {
    res.status(404);
    res.set('Content-type','text/html');
    res.render('404');
})

app.post("/form-sub", (req,res) => {
    console.log(req.body);
    let query = `INSERT INTO form_data (name, email, package, scared, comments) VALUES ("${req.body.cName}", "${req.body.cEmail}", "${req.body.answers}", "${req.body.numOwl}", "${req.body.comments}")`;
    // let query = `INSERT INTO <table_name> (<column_name>, <column_name>, <column_name>, ...) VALUES ("${req.body.<var_name>}", "${req.body.<var_name>}", "${req.body.<var_name>}", ...)';
    myDB.query(query, (err,result) => {
        if (err) throw err;
        console.log("Record inserted!");
        res.redirect("/form-sent");
    })
});

app.listen(port, () => {console.log('Server has started!')});