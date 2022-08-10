var fs = require('fs');

var readMe = fs.readFileSync('q2.txt', 'utf8');
console.log(readMe);