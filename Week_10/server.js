'use strict';
const http = require('http');
const express = require('express');
const mysql = require('mysql');
const fs = require('fs'); // fs is for reading files

let port = 3000;

const app = express();

// How .join() method works
// .join(str1,str2) --> str1+'/'+str2

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs'); // specify that you are using EJS templating and not .html files
app.use(express.static(__dirname+'/public')); // specify where all your static files (images, stylesheets and JS files for the client side)
// another way to write the previous line of code with the .join() method
// app.use(express.static.join(__dirname,'public'));

app.get("/", (req,res) => {
    res.set('Content-type','text/plain');
    res.render('index');
});

app.get("/houses", (req,res) => {
    res.set('Content-type','text/plain');
    res.render('houses');
});

app.get("/contact", (req,res) => {
    res.set('Content-type','text/plain');
    res.render('contact');
});

app.listen(port, () => {console.log('Server has started!')});