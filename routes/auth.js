const express = require('express');
const router = express.Router()

const {register,login,forgotpassword,resetpassword} = require('../controllers/authController')

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/resetpassword').post(resetpassword)
router.route('/forgotpassword:reset_token').post(forgotpassword)
