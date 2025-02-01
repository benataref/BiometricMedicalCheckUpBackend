const express=require('express');

const PatientController2 = require ('../controllers/Patientcontroller2');
const upload = require('../upload');
//const exePath = require('../workingDemo');
const router=express.Router();

const patientController2= new PatientController2;
//router.post('/init-device', patientController.initDevice);
//router.get('/device-data',patientController.get);
//router.get('/processFingerprint', patientController.getByIdAndCompareFingerprint);
//router.get('/captur', patientController2.captur);
router.get('/verify', patientController2.verifyFingerprint);
router.get('/exe', patientController2.getexe);
router.get('/processFingerprint', patientController2.processFingerprint);
router.get('/get/:id', patientController2.getById);
 router.get('/get', patientController2.get);
//router.post('/create', patientController2.create);
//router.put('/update/:id', patientController.Updated);
//router.delete('/delete/:id', patientController.Delete); 
module.exports= router;