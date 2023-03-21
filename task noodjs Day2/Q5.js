var fs = require('fs');
//read ASync
fs.readFile('data.json', 'utf8', (error, data) => {
     if(error){
        console.log(error);
        return;
     }
     console.log(JSON.parse(data));

})

//read Sync
const data = fs.readFileSync('data.json');
console.log(JSON.parse(data));