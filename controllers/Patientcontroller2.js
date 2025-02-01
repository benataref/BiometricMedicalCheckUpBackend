const Patient = require('../models/Patient');
const { execFile } = require('child_process');
const path = require('path');
const fs = require('fs');
const exePath = path.join(__dirname, '../workingDemo/ZKTecoFingerPrintScanner-Implementation.exe');

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
async processFingerprint(req, res) {
    try {
      // Execute the external file to capture fingerprint
      execFile(exePath, (err, data) => {
        if (err) {
          console.error('Error executing file:', err);
          return res.status(500).send('An error occurred while capturing fingerprint');
        }

        // Process fingerprint data
        const fingerprintData = data; // Assuming the data is in the desired format

        // You can directly use this data or save it to a patient record
        res.status(200).json({ success: true, fingerprintData: fingerprintData.toString() });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  }
  
  verifyFingerprint = async (req, res) => {
    try {
        const { patientId, newFingerprintData } = req.body;

        // Find patient by ID
        const patient = await Patient.findById(patientId);
        if (!patient) {
            return res.status(404).json({ success: false, message: 'Patient not found' });
        }

        // Compare Base64-encoded fingerprints
        const isMatch = patient.fingerKey === newFingerprintData;
        res.status(200).json({ success: true, isMatch });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

 
  create = async (req, res) => {
    try {
      const { fingerKey, passPort, labourId, pissuedD, pExpireD,
        fname, mname, lname, nationality, dob, gender, age, marrietalStatus,
        relogion, travelingto, jobtitel, cpr, agency, phone, ispayed } = req.body;

      const photo = req.file ? req.file.path : null;
      let fingerprintData;

      try {
        // Capture fingerprint data from the executable
        const fingerprintResult = await this.captureFingerprint();
        fingerprintData = fingerprintResult.data; // Assuming the executable returns binary data
      } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: 'Failed to capture fingerprint' });
      }

      const Newuser = new Patient({
        photo,
        fingerKey: fingerprintData, // Store binary data
        passPort, labourId, pissuedD, pExpireD,
        fname, mname, lname, nationality, dob, gender, age, marrietalStatus,
        relogion, travelingto, jobtitel, cpr, agency, phone, ispayed
      });

      await Newuser.save();
      res.status(200).json({ success: true, message: "User Created Successfully.", Newuser });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: "Internal server error" });
    }
  };

  async captureFingerprint() {
    return new Promise((resolve, reject) => {
      execFile(exePath, (err, data) => {
        if (err) {
          return reject(err);
        }
        console.log('Fingerprint data:', data); // Log data for debugging
        resolve({ data }); // Replace with actual processing if needed
      });
    });
  }
  compareFingerprints = (storedFingerprint, newFingerprint) => {
    return storedFingerprint.toString() === newFingerprint.toString(); // Simplified comparison
  };

  // Other methods unchanged

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
