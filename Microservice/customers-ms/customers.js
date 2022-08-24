const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes/api')

const app = express();
app.use('/customer-ms',routes)

//connect to mongoDB
mongoose.connect('mongodb+srv://root:root@shoppingcartdatabase.uajyr.mongodb.net/?retryWrites=true&w=majority', function () {
    console.log("MongoDB Connected successfully");
  })
mongoose.Promise = global.Promise;



app.listen(9002,()=>{
    console.log('Customer Service running on 9002')
})


