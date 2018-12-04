var express = require('express');
var mustache = require('mustache-express'); 
var router = express.Router()

var port = 3000;
var app = express();
// var angry_birds = require('../modules/angry_birds');

// tell our app that we need to use our mustahce express 
// engine configure html tamplating engine - set up out egnine to use html 
app.engine('html', mustache()); 
app.set('view engine', 'html'); 
 
// then we should find a plave to put our html - we reated a new directory called views which is in out route directory. its a way to seperate our concerns( aplace wehere out controllers live html live etc ) here views will house our html docs 

app.set('views', __dirname + '/views'); // this means we have a folder called views. 


// homepage route 
app.get('/', function(request, response){
    response.send('angry birds website')
  })


// tell your app to listen on your port
app.listen(port, function () {
    console.log(`App is listening on port ${port}`);
  })
  
  