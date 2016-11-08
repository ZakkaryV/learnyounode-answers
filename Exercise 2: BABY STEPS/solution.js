var args = process.argv;
var int = 0;

for (var i = 2; i < args.length; i++) {

	int += Number(args[i]);

};

console.log(int);
