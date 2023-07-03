const mongoose = require("mongoose")

const users = mongoose.Schema({
    username:{
        type:String,
        required :[true,"Must have a name"],
        unique : true,
    },
    email:{
        type:String,
        required :[true,"Must have a email"],
        unique : true,
    },
    password :{
        type:String,
        required :[true,"Must have a email"],
    }

})

const user = new mongoose.model("user",users)

module.exports = {user}