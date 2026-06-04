
const express = require('express')
const authController = require("../controllers/auth.controllers");
const { registerController, loginController } = require('../controllers/auth.controllers');
const identifyUser = require("../middleware/auth.middleware")

const authRouter = express.Router();

authRouter.post('/register', registerController) 
    
authRouter.post("/login", loginController)

authRouter.get("/get-me",identifyUser, authController.getMeController)

module.exports = authRouter
