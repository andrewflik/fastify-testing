// External Dependancies
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id:  {type: String},
    firstName:  {type: String},
    lastName:  {type: String},
    age:  {type : Number},
})

 const User = mongoose.model('user', userSchema);
 module.exports = User;