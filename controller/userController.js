const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const mongodb = require('mongodb')
const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')

const services = require('./services')

class UserController {
    static userRegister = async (req,res) =>{
            const {firstname,lastname,phone,email,password,cpassword} = req.body;
            const dateofbirth = req.body.DOB;
            
            const user = await userModel.findOne({"phone": phone}).lean();
       
            if(user){
                res.send({"status":"failed", "message": "User Already Exist!!"})
                console.log(user);
            }
            else{
                if(firstname && phone && password){
                    if(password == cpassword){
                        try{
                            const salt = await bcrypt.genSalt(10);
                            const hash_password = await bcrypt.hash(password,salt)
                            const doc = new userModel({
                                firstname: firstname,
                                lastname: lastname,
                                email: email,
                                phone: phone,
                                password: hash_password,
                                confirmpassword: hash_password,
                                dateOfBirth: dateofbirth,

                            })
                            await doc.save()
                            const saved = await userModel.findOne({phone: phone});
                                const token = jwt.sign({userID: saved._id},process.env.JWT_SECRET_KEY,{expiresIn: '5d'})
                                sendMsg(5,"You are Registered");
                                res.status(201).send({"status":"success", "message": "Registration Successful","token":token})
                        }catch(err){
                            console.log(err);
                            res.send({"status":"failed", "message": "Registration UnSuccessful"})
                        }
                    }
                    else{
                        res.send({"status":"failed","message": "Password and Confirm Password wasn't matching"})
                    }
                }else{
                    res.send({"status":"failed","message": "All feilds are required"})
                }
            }
    }
    static userLogin = async (req,res) => {
        const {phone,password} = req.body;
        let option = {
            sort: {"phone": phone}
        }
        const user = await userModel.findOne({phone: phone}).lean();

        if(user){
            if(phone && password){
                // const salt = await bcrypt.genSalt(10);
                // const hash_password = await bcrypt.hash(password,salt)
                const checkpass = await bcrypt.compareSync(password,user.password)
                if((user.phone === phone) && 
                // password === user.password
                checkpass){


                    const token = jwt.sign({userID:user._id},process.env.JWT_SECRET_KEY,{expiresIn:'5d'});
                    res.status(201).send({"status":"success","message": "Login Successful","token": token},)
                }else{
                    res.send({"status":"failed","message": "Please check the credentials"})
                    console.log(user.password);
                }
                
            }else{
                res.send({"status":"failed","message": "All feilds are required"})
            }
        }else{
            res.send({"status":"failed","message": "User not found! Please register"})

        }

    }


    static userDetails = async (req,res) =>{
        const Id = services.parseJwt(req.params.id);
        // res.send(Id);
        // const obj = mongodb.ObjectId(Id["userID"]);
        // res.send({"_id":Id})
        // const users = 
        const id = await userModel.findById(Id.userID)
        // const allid = await userModel.find()
        if(id){
            res.status(201).json(id)
        }else{
            res.send({"status":"failed","Message":"User not found"})
        }
    }
}



module.exports = UserController;
