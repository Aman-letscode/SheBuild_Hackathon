const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const vaccine = require("../models/vaccineModel");
const services = require("./services");

class UserController {
  static userWelcome = async (req, res) => {
    // res.json("Welcome to Registration form");
    const allid = await userModel.find();
    res.json(allid);
    // services.MsgAllot(allid);
  };
  static msgSend = async () =>{
    const allid = await userModel.find();
    // res.json(allid);
    
    services.MsgAllot(allid);
  }
  static userRegister = async (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const phone = req.body.phone;
    const email = req.body.email;
    const password = req.body.password;
    const cpassword = req.body.cpassword;
    const dob = req.body.dob;
    // const dateofbirth = req.body.DOB;

    const user = await userModel.findOne({ phone: phone }).lean();

    if (user) {
      res.json({ status: "failed", message: "User Already Exist!!" });
      sendMsg("7743927707", "You are Registered Successfully");
      console.log(user);
    } else {
      if (firstname && phone && password) {
        if (password == cpassword) {
          try {
            const salt = await bcrypt.genSalt(10);
            const hash_password = await bcrypt.hash(password, salt);
            const doc = new userModel({
              firstname: firstname,
              lastname: lastname,
              email: email,
              phone: phone,
              password: hash_password,
              confirmpassword: hash_password,
              dateOfBirth: dob,
            });
            await doc.save();
            const saved = await userModel.findOne({ phone: phone });
            const token = jwt.sign(
              { userID: saved._id },
              process.env.JWT_SECRET_KEY,
              { expiresIn: "5d" }
            );
            services.sendMsg("You are Registered Successfully");
            // services.updateVac(saved.lean())
            res.json({
                status: "success",
                message: "Registration Successful",
                token: token,
              });
          } catch (err) {
            console.log(err);
            res.json({
              status: "failed",
              message: "Registration UnSuccessful",
            });
          }
        } else {
          res.json({
            status: "failed",
            message: "Password and Confirm Password wasn't matching",
          });
        }
      } else {
        res.json({ status: "failed", message: "All feilds are required" });
      }
    }
  };



  static userLogin = async (req, res) => {
    console.log(req.body);
    // const { phone, password } = req.body;
    const phone = req.body.phone;
    const password = req.body.password;
    // const 
    const user = await userModel.findOne({ phone: phone }).lean();

    if (user) {
      if (phone && password) {
        const checkpass = await bcrypt.compareSync(password, user.password);
        if (user.phone === phone && checkpass) {
          const token = jwt.sign(
            { userID: user._id },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "5d" }
          );
          console.log("Login SUccessfully")
          res
            .status(201)
            .json({
              status: "success",
              message: "Login Successful",
              token: token,
            });
        } else {
          console.log("Login Unsuccessful")
          const result = {
            status: "failed",
            message: "Please check the credentials",
          }
          res.json(`${result}`);
          console.log(user.password);
        }
      } else {
        console.log("All feilds are required")
        res.json({ status: "failed", message: "All feilds are required" });
      }
    } else {
      console.log("User not found! Please registe")
      res.json({
        status: "failed",
        message: "User not found! Please register",
      });
    }
  };

  static enabled = async (req, res) => {
    const Id = services.parseJwt(req.params.id);
    const vac = req.body.vaccine;

    let id = await userModel.findById(Id.userID);
    const curdate = new Date();
    // let rem;
    let data = [];
    const vacName = id.vaccine;
    for (let ele of vacName) {
        
        if (ele.name == vac) {
          let updateDate = []
        for (let i = 0; i < ele.date.length; i++) {
          if (curdate.getTime() >= ele.date[i].getTime()) {
            // rem = i;
            // break;
            // continue;
            updateDate.push(curdate);
            ele.enable++;
          }else{

              updateDate.push(ele.date[i]);
          }
        }
        // ele.date.splice(rem, rem);
        ele.date = updateDate;
        // break;
      }
      data.push(ele);
    }
    userModel.updateOne(
      { phone: id.phone },
      { $set: { vaccine: data } },
      (err, doc) => {
        if (err) throw err;
        console.log("Updated");
      }
    );
    id = await userModel.findById(Id.userID);
    res.json({ status: "success", message: "Successfully Updated",user: id});



  }
  static userDetails = async (req, res) => {
    const Id = services.parseJwt(req.params.id);
    
    console.log(Id);
    let id = await userModel.findById(Id.userID);
    console.log(id);
    const allid = await vaccine.find();
    const vac = services.updateVac(id, allid);
    console.log(vac);
    if (vac.length > 0 ) {
      userModel.updateOne(
        { phone: id.phone },
        { $set: { vaccine: vac } },
        (err, doc) => {
          if (err) throw err;
          console.log("Updated");
        }
      );
      id = await userModel.findById(Id.userID);
    } 
    else {
      console.log(vac);
    }
    res.status(201).json({ user: id });
  };

  //    static Message = services.MsgAllot(model);
}

module.exports = UserController;
