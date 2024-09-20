const express = require('express');
const router= express.Router();
const {getUser,signIN,signUP}=require('../controllers/userControl')

router.get('/',getUser )
router.post('/signup',signUP)
router.post('/signin',signIN)


module.exports=router