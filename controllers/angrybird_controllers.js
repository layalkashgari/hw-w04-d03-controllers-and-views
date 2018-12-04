var express = require('express');
var router = express.Router();


var express = require('express');
var router = express.Router();

var birds = require('../modules/angry_birds');

// index route that shows all of the customers
router.get('/', function(request, response) {
    var angryBirdsVariables = { 
        birdsList: birds // angryBirds here its an array of object 
    }

})

// show route that shows a single bird 

router.get('/:birds', function(request, response) {


})

router.get('/angry_birds/:id', function(request, response) {  

})



module.exports = router;
