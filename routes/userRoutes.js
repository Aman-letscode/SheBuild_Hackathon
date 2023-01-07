const express = require('express')
const router = express.Router()

const userController = require('../controller/userController')
const checkUser =     require('../middlewares/auth')
const msg = require('../controller/msgSend')
// middlewares
router.use('/changePassword', checkUser)
router.use('/loggedUser', checkUser)


//Request and controls
// router.get('/send',(req,res)=>{ msg(5,"Your Appointment:")});
router.post('/register', userController.userRegister)
router.post('/login', userController.userLogin)
router.get('/dashboard/:id/', userController.userDetails)
// router.post('/login', userController.login)


module.exports = router;