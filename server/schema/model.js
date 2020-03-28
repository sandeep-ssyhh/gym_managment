var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({

    name : String,
    age : Number,
    bloodGroup : String
}); 

module.exports = mongoose.model('UserRegistration',userSchema);