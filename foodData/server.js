var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

var PORT = process.env.PORT || 3000;
//app.use(express.static(__dirname+'public'));

require('./converter.js')(app);




app.listen(PORT, function(){
	console.log('listening on PORT:', PORT);
});

/*
need to pull data from JSON
store in in a new object



*/