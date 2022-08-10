var fs = require('fs');

var text = process.argv.slice(2).toString();

fs.writeFileSync('q10.txt', text);
console.log('Your file is saved!');
