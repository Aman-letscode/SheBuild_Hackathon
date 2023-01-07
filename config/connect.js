const mongoose = require('mongoose')
// const { MongoClient, ServerApiVersion } = require('mongodb');

const connect = async (url) => {
    try{
        const db_opt = {
            dbname: "register"
        }
        // const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
        // client.connectSync(err => {
        //     const collection = client.db("register").collection("users");
        //     // perform actions on the collection object
        //     // client.close();
        //   });
        await mongoose.connect(url,db_opt)
        console.log(`Connected Successfully with ${db_opt.dbname}`);
    }catch(err){
        console.log(`Error Detected:${err}`)
    }
}

module.exports = connect;



