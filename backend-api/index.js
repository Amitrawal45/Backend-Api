const app = require('./src/config/express.config')
const PORT = 9005

app.listen(PORT, "localhost", (error)=>{
    if(!error){
        console.log(`Server is running at http://localhost:${PORT}`)
    }
})