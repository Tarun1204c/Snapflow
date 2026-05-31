const postModel = require('../models/post.model')
const ImageKit = require("@imagekit/nodejs")
const {toFile} = require('@imagekit/nodejs')
const jwt = require('jsonwebtoken')



const imagekit = new ImageKit({
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY
})



async function createPostController(req, res) {

    const file = await imagekit.files.upload({
        file:await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName : "Test",
        folder: "insta-clone-posts"
    })

    const post = await postModel.create({
        caption : req.body.caption,
        imgUrl: file.url,
        user:decoded.id

    })

    res.status(201).json({
        message: "Post created sucecessfully",
        post :post
    })

   

}

async function getPostController(req,res) {

    const userId = 

    const posts = await postModel.find({
        user : userId
    })

    res.status(200).json({
        message : "psot fetched sucessfully" ,
        posts  
    })

}

async function getPostDetails(req, res){


    const userId = 
    const postId = req.params.postId

    const post = await postModel.findById(postId)

    if(post){
        return res.status(404).json({
            message: "Post not found."
        })
    }
    const isValidUser = post.user.toString() === userId

    if(!isValidUser){
        return res.status(403).json({
            message:"Forbidden Content"
        })
    }

    return res.status(200).json({
        message : "Post Fetched Sucessfully" ,
        post
    })
}

module.exports = {
    createPostController,
    getPostController,
    getPostDetails
}