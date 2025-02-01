const express = require('express');

const router=express.Router();
router.use('/report', require('./ReportRout'));
router.use('/verification', require('./verification'));
router.use('/xray', require('./xrayrout'));
router.use('/maglumi800', require('./magRoutes'));
router.use('/labresult', require('./LabresRout'));
router.use('/login', require('./logrout'));
router.use('/labratory', require('./labroutes'));
router.use('/Mindray',require('./MindrayRouter'));
router.use('/user',require('./userroute'));
router.use('/patient',require('./PatientRout'));
router.use('/LabRequest',require('./LabReqRout'));
router.use('/vital' , require('./vitalrout'))
module.exports= router;

