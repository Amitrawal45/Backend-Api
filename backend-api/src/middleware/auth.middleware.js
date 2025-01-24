const loginCheck = (req,res,next)=>{
    let success = true
    if(success){
        next()
    }else{
        res.status(404).json({
            error:null,
            message:"Please login first",
            status:"Unauthenticated",
            options:null,
        })
    }
}

module.exports = {
    loginCheck
}