const Patient =require('../models/Patient');
const path = require('path');
const ZKLib = require('zkteco-lib');
const HID = require('node-hid');
class PatientController {
  printLabel = (text, barcode) => {
    // Construct ZPL command
    const zpl = `
        ^XA
        ^FO50,50
        ^A0N,50,50
        ^FD${text}^FS
        ^FO50,150
        ^B3N,N,100,Y,N
        ^FD${barcode}^FS
        ^XZ
    `;

    // Send ZPL command to printer
    const printer = new Printer({
        interface: 'usb', // Adjust according to your setup
    });

    printer.print(zpl);

    // Handle printer connection and disconnection if needed
};
post= async (req, res) => {
  try {
      const productId = req.params.id;

      // Fetch the product from the database
      const product = await Product.findById(productId);
      if (!product) {
          return res.status(404).json({ error: 'Product not found' });
      }

      const text = `Product: ${product.name}`;
      const barcode = product._id.toString(); // Convert ObjectId to string for printing

      printLabel(text, barcode);

      res.send({ message: 'Print job sent' });
  } catch (error) {
      console.error('Error printing label:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
};
    handleCaptureFingerprint = (req, res) => {
        execFile('path_to_your_exe_file.exe', (error, stdout, stderr) => {
          if (error) {
            console.error('Error capturing fingerprint:', error);
            return res.status(500).json({ success: false, message: 'Failed to capture fingerprint data' });
          }
      
          const fingerprintData = stdout.trim(); // Assuming the exe returns fingerprint data as a string
          res.status(200).json({ success: true, fingerKey: fingerprintData });
        });
      };
       handleCompareFingerprints = async (req, res) => {
        try {
          const { patientId, capturedFingerprintData } = req.body;
      
          // Fetch the patient's existing fingerprint data from the database
          const patient = await Patient.findById(patientId);
      
          if (!patient) {
            return res.status(404).json({ success: false, message: 'Patient not found' });
          }
      
          const existingFingerprintData = patient.fingerKey; // Assuming 'fingerKey' is the field storing fingerprint data
      
          // Compare the captured fingerprint data with the existing data
          const isMatch = capturedFingerprintData === existingFingerprintData;
      
          if (isMatch) {
            return res.status(200).json({ success: true, message: 'Fingerprint matches' });
          } else {
            return res.status(200).json({ success: false, message: 'Fingerprint does not match' });
          }
        } catch (error) {
          console.error('Error comparing fingerprints:', error);
          res.status(500).json({ success: false, message: 'Failed to compare fingerprint data' });
        }
      };
      
      
    captureFingerprint = async (req, res) => {
        if (!this.device) {
            return res.status(400).json({ error: 'Device not initialized' });
        }

        try {
            // Example of getting real-time logs which could include fingerprint data
            this.device.getRealTimeLogs((data) => {
                // Process data to extract fingerprint information
                console.log('Real-time log data:', data);
                // Assuming the data contains the fingerprint key
                const fingerKey = data.fingerKey || 'sample_fingerprint_key';
                res.json({ fingerKey });
            });

            // You might also use other methods to get fingerprint if available
            // const fingerKey = await this.device.getFingerprint();
            // res.json({ fingerKey });
        } catch (error) {
            console.error('Failed to capture fingerprint:', error);
            res.status(500).json({ error: 'Failed to capture fingerprint' });
        }
    };


 /*  create = async (req, res) => {
    try {
        const { fingerKey,passPort , labourId , pissuedD, pExpireD,
            fname,  mname , lname,  nationality, dob , gender, age, marrietalStatus,
           relogion,travelingto ,jobtitel , cpr,agency,phone,ispayed} = req.body;
        const photo = req.file ? req.file.path : null;
        let fingerprintData;
        try {
            fingerKey = await this.captureFingerprint();
        } catch (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'Failed to capture fingerprint' });
        }


        const Newuser = new Patient({
           photo, 
           fingerKey: fingerprintData,
           passPort , labourId , pissuedD, pExpireD, 
           fname,  mname , lname,  nationality, dob , gender, age, marrietalStatus,
           relogion,travelingto ,jobtitel , cpr,agency,phone,ispayed
        });

        await Newuser.save();
        res.status(200).json({ success: true, message: "User Created Successfully.", Newuser });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}; */
create=async(req,res)=>{
  try {
    const { fingerKey,passPort , labourId , pissuedD, pExpireD,
      fname,  mname , lname,  nationality, dob , gender, age, marrietalStatus,
     relogion,travelingto ,jobtitel , cpr,agency,phone,ispayed} = req.body;
     const photo = req.file ? req.file.path : null;
     const Newuser = new Patient({
      photo,  fingerKey,passPort , labourId , pissuedD, pExpireD, 
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
getById = (req, res) => {
  let id = req.params.id;
  Patient.findById(id)
      .then(doc => {
          // Assuming 'photo' field contains the path relative to the public directory
          const photoUrl = doc.photo ? `${req.protocol}://${req.get('host')}/${doc.photo}` : null;
          res.status(200).json({ ...doc._doc, photoUrl });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json({ error: err });
      });
}

///////Read api
/*
 get=async(req,res)=>{

   try {
     const users= await Patient.find()
    if (!users) {
      return  res.status(404).json({success:false})
    }

    res.status(200).json({users})
} catch (error) {
    console.log(error)
    
    res.status(500).json({success:false})
   }

}
*/
get=  (req, res, next)=>{
  Patient.find().exec().then(docs=>{
      console.log(docs);
     
          res.status(200).json(docs);
   
  })
  .catch(err=>{
      console.log(err);
      res.status(500).json({
          error:err
      });
  });

};
////////update user api
Updated=async(req,res)=>{
 try {
     const userId=req.params.id
 
 const updateuser=await Patient.findByIdAndUpdate(userId,req.body,{new:true})
   if (!updateuser) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
     res.status(200).json({ success: true, message: 'User updated successfully', updateuser });
 } catch (error) {
     console.log(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
 }
}

// delet user ap
Delete=async(req,res)=>{
try {
       const userId=req.params.id
   const deletuser= await Patient.findByIdAndDelete(userId)
   if (!deletuser) {
   return res.status(404).json({ success: false, message: 'user Not found' });
   }
   res.status(200).json({ success: true, message: 'user Deleted successfully' });
} catch (error) {
    console.log(error)
    res.status(500).json({ success: false, message: 'Internal server error' });
}
}
}

module.exports= PatientController;



