let mongoose = require('mongoose') 
let userSchema = new mongoose.Schema({
    first_Name: String,
    last_name: String
})
module.exports = mongoose.model('User', userSchema)