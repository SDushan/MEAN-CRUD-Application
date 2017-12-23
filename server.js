// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================
	
// config files
var db = require('./config/db');

mongoose.connect(db.url, function (err) {
	if (err) console.log(err)
}); // connect to our mongoDB database 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public')); // set the static files location 

require('./app/routes')(app); // pass application into our routes

// setting port number for running server
var port = process.env.port || 8080;
 
// starting server
app.listen(port, function() {
 console.log("Server is running at : http://localhost:" + port);
});