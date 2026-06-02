const express = require("express")
const userController = require("../controllers/user.controller")
const identifyUser = require("../middleware/auth.middleware") 

const userRouter = express.Router();

/**
 * @routes Post /api/user/follow/:userid
 * @description follow a user
 * @access Private
 */
userRouter.post("/follow/:username",identifyUser, userController.followUserController)



/**
 * @routes Post /api/user/unfollow/:userid
 * @description to unfollow a user
 * @access Private
 */
userRouter.post("/unfollow/:username", identifyUser,userController.unfollowUserController )


module.exports = userRouter;