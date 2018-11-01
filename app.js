//Entry point for node deployment

// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'html')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

var express = require("express");
var app     = express();
var path    = require("path");

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, './'))); //Trying to set this to the project parent folder
//app.use(express.static(path.join(__dirname, 'js')));

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(PORT);

console.log("Running at Port 5000");