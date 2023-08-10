const express = require('express'); // import the express package
const app = express(); // create a new application

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Configure the public folder for static assets/files
app.use(express.static('public'));

// Configure application to receive and read the request body from URLs
app.use(express.urlencoded({extended: true}));

// Routes

// !! Whenever we want to render a page, we always use the .get() method !!
// Render the index.ejs page (home page)
app.get('/', (req, res) => {
    // DO NOT write the '.ejs' extension, as it would be read as part of the filename
    res.render('index'); 
});

// Render the houses.ejs page
app.get('/houses', (req, res) => {
    res.render('houses');
});

// Render the contact.ejs page
app.get('/contact', (req, res) => {
    res.render('contact');
})

// Run the application on port 3000 --> localhost:3000
app.listen(3000, () => {
    console.log('Listening on port 3000.');
});