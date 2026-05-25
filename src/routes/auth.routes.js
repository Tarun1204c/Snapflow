const express = require('express')
const authController = require("../controllers/auth.controllers");
const { registerController, loginController } = require('../controllers/auth.controllers');

const authRouter = express.Router();

authRouter.post('/register', registerController) 
    
authRouter.post("/login", loginController)

module.exports = authRouter
