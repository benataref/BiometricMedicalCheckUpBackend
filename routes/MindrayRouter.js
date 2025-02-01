const express=require('express');
const multer = require('multer');
const MindrayController = require ('../controllers/MindrayController');
const UploadMindray = require('../UploadMindray');

const router=express.Router();

const mindrayController= new MindrayController();



router.get('/get/:id', mindrayController.getById);
 router.get('/get', mindrayController.get);


router.post('/create1',UploadMindray.single('file'), mindrayController.create);

//router.put('/update/:id', UploadMaglumi800.Updated);
//router.delete('/delete/:id', UploadMaglumi800.Delete); 
module.exports= router;