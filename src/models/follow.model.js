const mongoose = require('mongoose')


const followSchema = new mongoose.Schema({
    followers :{
        type : String
    },
    following : {
        type : String
    }
}, { 
    timestamps : true   
})

const followModel = mongoose.model("follows", followSchema)

module.exports = followModel