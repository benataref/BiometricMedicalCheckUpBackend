const Patient = require('../models/Patient');
const { execFile } = require('child_process');
const path = require('path');
const fs = require('fs');
const multer = require('multer');


const exePath = path.join(__dirname,'../Release/fingerprintscaner.exe');
const exeVPath = path.join(__dirname,'../Release/fingerprintverify.exe');


class PatientController1 {


  async getexe(req, res) {
    execFile(exePath, (err, data) => {
      if (err) {
        console.error('Error executing file:', err);
        return res.status(500).send('An error occurred');
      }
      console.log('Data received from executable:', data.toString());
      res.send(data.toString());
    });
  }
  async getexeV(req, res) {
    execFile(exeVPath, (err, data) => {
      if (err) {
        console.error('Error executing file:', err);
        return res.status(500).send('An error occurred');
      }
      console.log('Data received from executable:', data.toString());
      res.send(data.toString());
    });
  }



create1=async(req,res)=>{
  try {
    const { fingerKey,passPort , labourId , pissuedD, pExpireD,
      fname,  mname , lname,  nationality, dob , gender, age, marrietalStatus,
     relogion,travelingto ,jobtitel , cpr,agency,phone,ispayed} = req.body;
     const photo = req.file ? req.file.path : null;
     const Newuser = new Patient({
      photo, 
      fingerKey,
      passPort , labourId , pissuedD, pExpireD, 
      fname,  mname , lname,  nationality, dob , gender, age, marrietalStatus,
      relogion,travelingto ,jobtitel , cpr,agency,phone,ispayed
   });
   await Newuser.save()

   res.status(200).json({success:true,message:"User Created Successfully.", Newuser})
  } catch (error) {
    console.log(error)
  return  res.status(500).json({success:false,message:"Interl server eror"})
  }

} 
   
getI =(req, res) => {
    const filename = req.params.filename;
    console.log(`Requesting file: ${filename}`);
    res.sendFile(path.join(__dirname, 'uploads', filename), (err) => {
        if (err) {
            console.error('File sending error:', err);
            res.status(err.status).end();
        }
    });
};
  getById = (req, res) => {
    let id = req.params.id;
    Patient.findById(id)
      .then(doc => {
        const photoUrl = doc.photo ? `${req.protocol}://${req.get('host')}/${doc.photo}` : null;
        res.status(200).json({ ...doc._doc, photoUrl });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  }

  get = (req, res, next) => {
    Patient.find().exec().then(docs => {
      console.log(docs);
      res.status(200).json(docs);
    })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  };

  Updated = async (req, res) => {
    try {
      const userId = req.params.id;
      const updateuser = await Patient.findByIdAndUpdate(userId, req.body, { new: true });
      if (!updateuser) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
      res.status(200).json({ success: true, message: 'User updated successfully', updateuser });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  }

  Delete = async (req, res) => {
    try {
      const userId = req.params.id;
      const deletuser = await Patient.findByIdAndDelete(userId);
      if (!deletuser) {
        return res.status(404).json({ success: false, message: 'User Not found' });
      }
      res.status(200).json({ success: true, message: 'User Deleted successfully' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }

  }

}
module.exports = PatientController1;
