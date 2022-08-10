var fs = require('fs');
var text = fs.readFileSync("q9.txt", 'utf-8');
var textByLine = text.split(' ');
console.log(textByLine);