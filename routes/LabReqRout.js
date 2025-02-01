const express=require('express');
const LabReqController = require ('../controllers/LabReqController');
const router=express.Router();
const labReqController= new LabReqController();
 router.get('/get', labReqController.get);
router.post('/create', labReqController.create);
router.put('/update/:id', labReqController.Updated);
router.delete('/delete/:id', labReqController.Delete); 
module.exports= router;