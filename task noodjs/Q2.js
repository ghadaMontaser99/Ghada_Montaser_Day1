var fs = require('fs');
var readline = require('readline');


var fileStream = fs.createReadStream('data.json');

var readable = readline.createInterface({
    input:fileStream,
    crlfDelay: Infinity
  });

  readable.on('line', function(chunk) {
	console.log(chunk);
});




