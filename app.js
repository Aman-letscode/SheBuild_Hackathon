const dotenv = require('dotenv')
dotenv.config()


const express = require('express')
const cors = require('cors')


//user defined files
const connect = require('./config/connect')
const routes = require('./routes/userRoutes')


//Initializing the express, port and url
const app = express()
const port = process.env.PORT 
const DATABASE_URL = process.env.DATABASE_URL

//using the cors function - for securing the routes
app.use(cors())
app.use(express.json())
app.use("/api/user",routes)

connect(DATABASE_URL)


app.listen(port, ()=>{
    console.log(`Listening at the port: ${port}`)
});



