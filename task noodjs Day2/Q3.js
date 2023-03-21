var fs = require('fs');
 
fs.renameSync('NewName.txt', 'Rename.txt');
console.log('File Renamed.');