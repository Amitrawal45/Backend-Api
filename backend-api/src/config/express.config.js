const express = require("express");
const app = express();
const router = require('./router.config')

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/api/v1',router)
app.use((req,res,next)=>{
  next({
    code : 404,
    message:"Not Found",
    status:"Not Found"
  })
})

//Error handling middleware
app.use((error,req,res,next)=>{
  let statusCode = error.code || 500
  let details = error.details || null
  let message = error.message || "Server Error"
  let status = error.status || "Internal server error"

  res.status(statusCode).json({
    error:details,
    message:message,
    status:status,
    opions:null
  })
})

module.exports = app


