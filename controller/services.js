// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid = "AC6d4f53a03d61c4d80ebe3f0efa4fbb83";
const authToken = process.env.ACC_TOKEN;
const client = require("twilio")(accountSid, authToken);
const jwt = require('jsonwebtoken')


class Services{


  static parseJwt= async (token)=> {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

   static updateVac = async(id,vaccines)=>{
    const date = new Date(id.pregnancy_date)
    const time = date.getTime(); 
    if(id.vaccine.length== 0){

    for(let element of vaccines){
      // vaccines.forEach(element => {
        let obj = {};
        
        obj["name"] = element.name;
        obj["enable"] = 0;
        obj["date"] = [];
        if(element.name == "Influenza"){
          let mon = date.getMonth();
          if(mon<3 || mon>=11){
            obj["date"].push(date);
          }
          else{
            obj["date"].push(date.setMonth(11))
          }
          
        }
        else{
           for(let ele of element["Duration_start"]){
          // element["Duration_start"].forEach(ele =>{
               let vacTime = new Date(time+ele*7*24*60*60*1000);
               obj["date"].push(vacTime);
          }
        }
        obj["repeat"]= element.repeat;
        id.vaccine.push(obj);
      }
      console.log(id.vaccine);
    }
    
   }

  static sendMsg = async (recipent,Messages) => {
  
      client.messages
        .create({ body: Messages, from: "+14323025386", to: "+91"+recipent })
        .then(message => console.log(message.sid));
  }

}



module.exports = Services;