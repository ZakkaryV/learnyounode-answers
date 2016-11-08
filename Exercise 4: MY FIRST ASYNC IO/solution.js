var fs = require('fs');

var dir = process.argv[2];

var str = undefined;

fs.readFile(dir, function(err, data) {

	if (err) return console.error(err)
	
	console.log(data.toString().split("\n").length - 1);
	
});





