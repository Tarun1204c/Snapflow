const followModel = require('../models/follow.model')


async function followUserController(req,res) {

    const followerUsername = req.user.username
    const followeeUsername = req.params.username


    const folloRecord = await followModel.create({
        follower : followerUserNmae,
        followee : followeeUsername
    })

    res.status(201).json({
        message : `You are not following ${followerUsername}`,
        follow : followRecord
    })

}



module.exports = {
    followUserController
}