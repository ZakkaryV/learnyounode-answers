const net = require('net');

var port = process.argv[2];

var date = new Date();
var year = date.getFullYear().toString();
var month = date.getMonth().toString();
var day = date.getDay().toString();
var hours = date.getHours().toString();
var minutes = date.getMinutes().toString();
var output = year.concat('-', month, '-', day, ' ', hours, ':', minutes);

var server = net.createServer(function(c) {

	console.log("Connected To Server");
	c.on('end', function() { console.log("Disconnected From Server") });

	c.write(output + "\n");
	c.pipe(c);
	c.end();

});

server.listen(port);


