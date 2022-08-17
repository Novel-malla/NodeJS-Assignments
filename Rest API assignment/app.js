var express = require('express');
var mongoose = require('mongoose');

var route = require('./router');

var app = express();

app.use('/inventory', route)
mongoose.connect('mongodb+srv://root:root@shoppingcartdatabase.uajyr.mongodb.net/?retryWrites=true&w=majority', function () {
    console.log('MongoDb connection done');
})

app.listen(3000, () => {
    console.log('Application running on port 3000');
})