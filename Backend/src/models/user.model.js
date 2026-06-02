const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username : {
        type: String,
        unique : [true, "Username already exists"],
        required : true
    },
    email : {
        type : String,
        unique : [true, "email already exists"],
        required : [true, "email is required"]

    },
    password : {
        type : String,
        required : [true, "Password is required"]
    },
    bio : String,
    profileImage : {
        type : String,

    },
    followers : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "users"
    }],
    following : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "users"
    }],

})


const userModel = mongoose.model("user", userSchema)

module.exports = userModel;