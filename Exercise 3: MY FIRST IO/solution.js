var fs     = require('fs');
var loc    = process.argv[2];
var string = fs.readFileSync(loc).toString()



console.log(string.split("\n").length - 1);


