const express=require('express');
const multer = require('multer');
const PatientController1 = require ('../controllers/PatientController1');
const upload = require('../upload');
//const exePath = require('../workingDemo');
const router=express.Router();

const patientController= new PatientController1();
//router.post('/init-device', patientController.initDevice);
router.get('/getexe',patientController.getexe);


router.get('/exe', patientController.getexe);
router.get('/exeV', patientController.getexeV);
//router.get('/getI:Uploads', patientController.getI);
router.get('/get/:id', patientController.getById);
 router.get('/get', patientController.get);


router.post('/create1',upload.single('photo'), patientController.create1);

router.put('/update/:id', patientController.Updated);
router.delete('/delete/:id', patientController.Delete); 
module.exports= router;