const express=require('express');
const logincontroller = require ('../controllers/logincontroller');
const router=express.Router();
const Logincontroller= new logincontroller();

router.post('/login', Logincontroller.check);
router.post('/register', Logincontroller.register);

module.exports= router;