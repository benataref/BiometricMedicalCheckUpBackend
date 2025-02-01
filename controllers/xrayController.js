
const mongoose = require('mongoose');
const Patient =require('../models/Patient');
const XrayR =require('../models/xrayR');
class xrayController{
  create = async (req, res) => {
    try {
      const { pid, chestxray, filmno, comment, conclusion, registerdby, updatedby } = req.body;
      // Validate the input if necessary
      const newUser = new XrayR({ pid, chestxray, filmno, comment, conclusion, registerdby, updatedby });
      await newUser.save();

      res.status(200).json({ success: true, message: "User Created Successfully.", newUser });
    } catch (error) {
      console.error('Error creating X-ray record:', error); // Log detailed error
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  };

  barcode= (req, res) => {
    const { barcode } = req.body;
    // Process the barcode data (e.g., save to database, validate)
    console.log('Received barcode:', barcode);
    res.json({ success: true, message: 'Barcode received' });
  };
  

 get=  (req, res, next)=>{
  XrayR.find().exec().then(docs=>{
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
getx = async (req, res) => {
  const patientId = req.params.pid;

  // Check if patientId is provided
  if (!patientId) {
    return res.status(400).send('Patient ID is required');
  }

  try {
    // Convert patientId to ObjectId
    const objectId = new mongoose.Types.ObjectId(patientId);

    // Fetch data using the ObjectId
    const vitalData = await XrayR.find({ pid: objectId }).exec();
    res.json(vitalData);
  } catch (err) {
    console.error('Error fetching vital data:', err);
    res.status(500).send('Error fetching vital data');
  }
};
getById= (req, res)=>{
  let id=req.params.id
  XrayR.findById(id).then(doc=>{
    console.log(doc);
     
    res.status(200).json(doc);

   }) .catch(err=>{
    console.log(err);
    res.status(500).json({
        error:err
    });
});
  }

Updated=async(req,res)=>{
 try {
     const userId=req.params.id
 
 const updateuser=await XrayR.findByIdAndUpdate(userId,req.body,{new:true})
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
   const deletuser= await XrayR.findByIdAndDelete(userId)
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
module.exports=xrayController;

