var fs = require('fs');

console.log(fs.readdirSync('./').forEach(file => {console.log(file)}));