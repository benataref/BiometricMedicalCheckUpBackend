const express=require('express');
const multer = require('multer');
const maglumi800Controller = require ('../controllers/maglumi800Controller');
const UploadMaglumi800 = require('../UploadMaglumi800');

const router=express.Router();

const Maglumi800Controller= new maglumi800Controller();



router.get('/get/:id', Maglumi800Controller.getById);
 router.get('/get', Maglumi800Controller.get);


router.post('/create1',UploadMaglumi800.single('file'), Maglumi800Controller.create);

//router.put('/update/:id', UploadMaglumi800.Updated);
//router.delete('/delete/:id', UploadMaglumi800.Delete); 
module.exports= router;