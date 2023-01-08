const express = require('express')
const router = express.Router()

const userController = require('../controller/userController')



//Request and controls
 
router.post('/register', userController.userRegister)
router.get('/register', userController.userWelcome)
router.post('/login', userController.userLogin)
router.get('/dashboard/:id/', userController.userDetails)
router.post('/enable/:id/', userController.enabled)



module.exports = router;