class AuthController{
    register = (req,res,next)=>{
        let data = req.body
        res.json({
            data:data,
            message:"User Register successfully",
            status:"Ok",
            options:null
        })
    }

    login = (req,res,next)=>{}
    userActive = (req,res,next)=>{}
    forgotPassword = (req,res,next)=>{}
    resetPassword = (req,res,next)=>{}
    getUserProfile = (req,res,next)=>{}
    updateUserProfile = (req,res,next)=>{}
  
}

const authController = new AuthController()
module.exports = authController