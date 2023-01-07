// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid = "AC6d4f53a03d61c4d80ebe3f0efa4fbb83";
const authToken = process.env.ACC_TOKEN;
const client = require("twilio")(accountSid, authToken);
const jwt = require('jsonwebtoken')


class Services{


  static parseJwt= (token)=> {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}


  static sendMsg = (recipent,Messages) => {
  
      client.messages
        .create({ body: `${Messages}`, from: "+14323025386", to: recipent })
        .then(message => console.log(message.sid));
  }
}



module.exports = Services;