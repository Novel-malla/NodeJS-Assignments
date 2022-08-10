var http = require('http');

var server = http.createServer(function(req, res){
res.end('Success! I am listening from port: 3000');
});

server.listen(3000, '127.0.0.1');
console.log('Success! I am listening from port: 3000');