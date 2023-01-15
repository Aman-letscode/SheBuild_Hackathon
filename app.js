const dotenv = require('dotenv')
dotenv.config()

const bodyparser = require('body-parser')
const express = require('express')
const cors = require('cors')

//user defined files
const connect = require('./config/connect')
const routes = require('./routes/userRoutes')
const UserController = require('./controller/userController')


//Initializing the express, port and url
const app = express()
const port = process.env.PORT 
const DATABASE_URL = process.env.DATABASE_URL

//using the cors function - for securing the routes
connect(DATABASE_URL)
app.use(cors())
app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use("/api/user",routes)



app.listen(port, ()=>{
    // interval();
    setInterval(() => {
    //   const num =   MsgAllot();
    UserController.msgSend();
    }, 24*60*60*1000);
    console.log(`Listening at the port: ${port}`)
});



