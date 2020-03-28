var express = require('express');
var app = express();
var port =9000;
var indexRoute = require('./server/route/index'); // Importing index file of route
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

// var users = require('./server/schema/model'); we used it at controller page

mongoose.connect('mongodb://localhost:27017/gym_db', { useNewUrlParser: true, useUnifiedTopology: true });
app.use('/api', indexRoute);

app.listen(port);

console.log('Port is running on ', port);