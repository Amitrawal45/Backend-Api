const authRouter = require('express').Router()
const authController = require('../auth/auth.controller')

authRouter.post('/register',authController.register)
authRouter.post('/login',authController.login)
authRouter.post('/active-user',authController.userActive)
authRouter.post('/forgetPassword',authController.forgotPassword)
authRouter.post('/resetPassword',authController.resetPassword)
authRouter.get('/user',authController.getUserProfile)
authRouter.post('/user/userId',authController.updateUserProfile)


module.exports = authRouter