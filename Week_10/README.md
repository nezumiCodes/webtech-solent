# Creating a website with Node.js (server), Express (routes), EJS (html templating) and MySQL (database)

1) Open a terminal in VSCode, and write the following commands
```(javascript)
npm init -y // initialise Node.js and Node Package Manager (npm)
npm install express // install express
npm install ejs // install ejs
npm install mysql // install mysql
npm install path // install path

----- OR IN ONE LINE INSTALL ALL ------------
npm install express ejs mysql path

```
(There packages are installed locally to your project)

After executing these commands, you get a `package.json` file, which you can modify the information about project.

<hr>

2) Create a `public` and a `views` folder inside of the main project folder. 
The `public` folder will contain all *static* elements, such as images, stylesheets and JavaScript file **associated** with the CLIENT side. 
The `views` folder will contain all the .ejs files, and a `partials` folder for *partial* html code (such as head, header, banner, footer) that get reused for multiple pages.

	Suggested folder structure:
```
	project/
	|
	|__ node_modules/*
	|
	|__ views/
		|__ partials/
	|
	|__ public
		|__ images/
		|__ scripts/
		|__ stylesheets/
	|
	|__ server.js
	|__ database.js
```
<hr>

3) Create a `server.js` file inside of the main project folder. This file will contain the code that will initialise the server, and we will create the routing for all of our HTML(.ejs) files. 
We will need to *import* the packages we downloaded before through npm.

```(javascript)
const express = require('express'); // import express
const mysql = require('mysql'); // import mysql

let port = 3000; // access a port, it can be any other port available (3000,3030,5000)

const app = express(); // initiates a server BUT we don't actually communicate with the server YET.
```

sEJS doesn't need to be imported because it's a template engine BUT we will need to specify that our project uses EJS instead of pure HTML.

```
app.set('views', path.join(__dirname,'views')); // we set our views folder (Node automatically searches for such folder but it's always specify it programatically)
app.set('view engine', 'ejs'); // specify that you are using EJS templating and not .html files
app.use(express.static(__dirname+'/public')); // specify where all of our static files exist (by default Node searches for a public folder, but it's always specify it programatically)
```

Leave some space after these lines of code in order to add routing AFTER you have finished with your html/ejs code.

Add this line at the end of your code.
`app.listen(port, () => {console.log('Server has started!')});`
Now your server is listening for requests, the first argument to the app.listen() method is the port you're listening for and the secod argument is a callback function (in a arrow format). For the callback function, just print to the console that everything is fine. 

<hr>

4) Write your HTML(.ejs) code, and place the images, stylesheets and JS files in the appropriate folders. 
Also, don't forget to use correct paths when referencing a file. 
For files that are inside of the `public` folder, you don't need to write the whole path f.e. './public/*other_folder*/*file*' , but instead write the path of the file as it is inside of public f.e. '*other_folder*/*file*'
To add partial code to your .ejs use `<%- include('./partials/__file_name__.ejs') %>` at the place where you want the code to appear.

<hr>

5) Add routing to `server.js`. 
Use this sample code, in order to add routing for all your endpoints (.ejs files).
```
app.get("/__route_name__", (req,res) => {
    res.set('Content-type','text/plain'); // set the type of content to be displayed (this is a setting)
    res.render('__ejs_file_to_be_rendered__'); // fill in the .ejs file you want to display for this route (write only the name of the file AND NOT the extension)
});
```
Use as many of those blocks of code as you need, depending on how many pages you have.

<hr>

6) In order to access HTML pages from another page, enclose your code with the `<a href=''></a>` tag. The href should contain ONLY the ENDPOINT you want to access, as defined in the routes you created inside of `server.js`.

<hr>

7) Communication with Database, GET and POST results. (TO BE CONTINUED IN WEEK 11)
![Browser Server Communication for Forms](./public/images/POST_GET_REDIRECTS.png)

<hr>

8) Run your server!
Open up a terminal, and write this:
`npm start`
You can access your project through a browser by typing `localhost:__port_num__`



