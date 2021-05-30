


// const express = require('express');
// const path = require('path');
// const app = express();




// //get route for index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'))
//  });
 


//         //get route for notes.html
// app.get('/notes', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/notes.html'))
// });





// //EXPORT GET ROUTES
// module.exports = app;


var path = require("path");
var express = require("express");
var app = express();
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
module.exports = app;