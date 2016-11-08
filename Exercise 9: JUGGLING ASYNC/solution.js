const fs = require('fs');
const http = require('http');
const concatStream = require('concat-stream');

var urls = process.argv.slice(2);
var answer = [];

for (var i = 0; i < urls.length; i++) {

http.get(urls[i], function(response) {

	response.on('err', function(err) { 
		if (err) { return console.log(err) };
}); 

	response.setEncoding('utf-8');
	
	var concatBuffer = concatStream(function(buffer) { 

		console.log(buffer);

}); 

	response.pipe(concatBuffer);

}); 


};  


