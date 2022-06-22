/*
User Model Ex
const userModel = {
    id: "",
    firstName: "",
    lastName: "",
    age: "",
}
*/
// Get user model
const User = require('../models/user');
// Handlers 

exports.createUser = async(req, reply) => {
    // Genrate random userid for now
    //let id = Math.floor(1000 + Math.random() * 9000);
    // extract first name, last name and age
    console.log(req.body)
    try{
        const newUser = await User.create(req.body);
        reply.send(newUser);
    }catch(e){
        req.log.error(e)
        reply.code(500).send("Lol")
    }
}

exports.getUser = async(req, reply) => {
    // get id and db
    try{
        const id = Number(req.query.id);
        console.log(id);
        //const userDetail = await User.findById(id);
        const userDetail = User.findOne({id:id});
        return userDetail;
    }catch(e){
        reply.send("User not found lol " + req.body)
        console.log(e);
    }
}