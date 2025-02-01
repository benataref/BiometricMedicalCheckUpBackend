
const mongoose = require('mongoose');
const Vital =require('../models/Vital');
const Patient =require('../models/Patient');
class vitalcontroller{
 create=async(req,res)=>{
  try {
      const { pid,medicalillness,disablity,alergy,previousAdAc,height,weight,bmi,bloodpresur,pulsmin,rrmin,colorvision,temp,spo2,vol,
        prythm,hearingLeft,hearingright,visualacuty,unaidedL6N,unaidedR6N,aidedL20N, aidedR20N,unaidedL6D,unaidedR6D,aidedL20D,aidedR20D,
           generalapperance,Rsystem,cvSystem, ent,heent,breast,precordium,lymphnodes,abdomen,hemia,exterimities,skin,deformities,back,cns,genitourinary,
        hydrocele,apperance,behaviour,speech,cognition,memory, mood,attention,orientation,concentration,thoughts,cranialnerve,MotorExam,sensorExam,
        supreficalReflexis,dtr,otherCnsExam,finalconclution,createdBy,UpdatedBy}=req.body
     
      


   const Newuser=  new Vital({
    pid,medicalillness,disablity,alergy,previousAdAc,height,weight,bmi,bloodpresur,pulsmin,rrmin,colorvision,temp,spo2,vol,
    prythm,hearingLeft,hearingright,visualacuty,unaidedL6N,unaidedR6N,aidedL20N, aidedR20N,unaidedL6D,unaidedR6D,aidedL20D,aidedR20D,
       generalapperance,Rsystem,cvSystem, ent,heent,breast,precordium,lymphnodes,abdomen,hemia,exterimities,skin,deformities,back,cns,genitourinary,
    hydrocele,apperance,behaviour,speech,cognition,memory, mood,attention,orientation,concentration,thoughts,cranialnerve,MotorExam,sensorExam,
    supreficalReflexis,dtr,otherCnsExam,finalconclution,createdBy,UpdatedBy
   })
   await Newuser.save()

   res.status(200).json({success:true,message:"User Created Successfully.", Newuser})
  } catch (error) {
    console.log(error)
  return  res.status(500).json({success:false,message:"Interl server eror"})
  }
}



 get=  (req, res, next)=>{
  Vital.find().exec().then(docs=>{
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

getById= (req, res)=>{
  let id=req.params.id
  Vital.findById(id).then(doc=>{
    console.log(doc);
     
    res.status(200).json(doc);

   }) .catch(err=>{
    console.log(err);
    res.status(500).json({
        error:err
    });
});
  }
////////update user api
Updated=async(req,res)=>{
 try {
     const userId=req.params.id
 
 const updateuser=await Vital.findByIdAndUpdate(userId,req.body,{new:true})
   if (!updateuser) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
     res.status(200).json({ success: true, message: 'User updated successfully', updateuser });
 } catch (error) {
     console.log(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
 }
}
getv = async (req, res) => {
  const patientId = req.params.pid;

  // Check if patientId is provided
  if (!patientId) {
    return res.status(400).send('Patient ID is required');
  }

  try {
    // Convert patientId to ObjectId
    const objectId = new mongoose.Types.ObjectId(patientId);

    // Fetch data using the ObjectId
    const vitalData = await Vital.find({ pid: objectId }).exec();
    res.json(vitalData);
  } catch (err) {
    console.error('Error fetching vital data:', err);
    res.status(500).send('Error fetching vital data');
  }
};

// delet user ap
Delete=async(req,res)=>{
try {
       const userId=req.params.id
   const deletuser= await Vital.findByIdAndDelete(userId)
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
module.exports=vitalcontroller;

