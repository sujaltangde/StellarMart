const app = require('./app.js')
const dotenv = require('dotenv')
const connectDatabase = require('./config/database.js') 

dotenv.config({path:"./config/config.env"})

// connecting databse
connectDatabase() ;


// Handling Uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`)
    console.log("Shutting down the server due to uncaught exception")

    process.exit(1)
})





const server = app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})



process.on("unhandledRejection", err => {
    console.log(`Error: ${err.message}`)
    console.log("Shutting down the server due to unhandled promise rejection")
    server.close(()=>{
        process.exit(1)
    })
})