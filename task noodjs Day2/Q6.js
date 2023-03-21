const fs = require('fs')
      
let data = "Hello ITI."
fs.writeFile('info.txt', data, (err) => {
      
    // In case of a error throw err.
    if (err) throw err;
    else
    {
        console.log("data added successfully in the info.text ")
    }
})