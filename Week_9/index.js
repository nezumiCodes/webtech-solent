const express = require('express');

const app = express();

app.get("/", (req,res) => {
    res.send("<h1>Welcome to the Home Page!</h1>");
});

app.get("/about", (req,res) => {
    res.send("<h1>Welcome to the About Page!</h1>");
});

app.get("/search/:item", (req,res) => {
    res.send(`<h1> ${req.params.item} </h1>`);   //"<h1>" + req.params.item + "</h1>"
});


app.listen(5000, () => { console.log("Server Started")});
