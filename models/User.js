const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    email: String,
    messaje: String ,
     tel: Number,
    service: String,
});

module.exports = mongoose.model('User', UserSchema);