const express =require('express');
const usercontrollers=require('../controllers/usercontrollers');

const router=express.Router()
const Usercontrollers=new usercontrollers();
router.post('/create', Usercontrollers.create)
router.get('/get',Usercontrollers.get)
router.put('/update/:id',Usercontrollers.Updated)
router.delete('/delete/:id',Usercontrollers.Delete)



module.exports=router;