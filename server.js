var PORT = process.env.PORT || 3002;
var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + '/public'));

http.listen(PORT, function () {
	console.log('Server started!');
});



