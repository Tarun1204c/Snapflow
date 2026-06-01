const mongoose = require('mongoose')


const followSchema = new mongoose.Schema({
    followers :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "users",
        required : [true, "Follwers is required"]
    },
    following : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users",
        required : [true, "Following is required"]
    }
}, { 
    timestamps : true   
})

const followModel = mongoose.model("follows", followSchema)

module.exports = followModel