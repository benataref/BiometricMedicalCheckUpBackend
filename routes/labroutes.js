const express=require('express');
const labController = require ('../controllers/labController');
const router=express.Router();
const LabController= new labController();

router.get('/get/:id', LabController.getById);
 router.get('/get', LabController.get);
router.post('/create', LabController.create);
router.put('/update/:id', LabController.Updated);
router.delete('/delete/:id', LabController.Delete); 
module.exports= router;