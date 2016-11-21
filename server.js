var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname+'public')));

require('./app/routing/html-routes.js')(app);
require('./app/routing/api-routes.js')(app);


app.listen(PORT, function(){
	console.log('listening on PORT:', PORT);
});

// app.get('/', function(req, res){
// 	res.sendFile(__dirname + '/app/public/maps.html');
// 	app.use(express.static('.'));
// });