const express=require('express');
const ReportController = require ('../controllers/ReportController');
const router=express.Router();
const reportController= new ReportController();
router.get('/getL/:id', reportController.getL);
 router.get('/getX/:id', reportController.getX);
router.get('/getV/:id', reportController.getv);
 
module.exports= router;