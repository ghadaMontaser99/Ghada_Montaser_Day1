var fs = require('fs');
var dir = './Create_Dir';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
    console.log("created successfully")
}