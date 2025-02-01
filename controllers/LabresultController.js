const labResualt =require('../models/LabResualt');
const mongoose = require('mongoose');
class LabresultController{
 create=async(req,res)=>{
  try {
      const { pid,bloodGroup,rh ,hemoglobin,plateletes,wbc,rbc,rbsfbs,creatine,lft,sgot,sgpt,alp,bun,
        malaria,microfilaria,hivll,antihcv,tpha,hbsag,vdrl,pregnancy,appearance,color,ph,spgravity,
        keton,sugar,alnumin,nitrate,leukocyte,blood,rbchpf,wbchpf,epithcelllpf,heminths,cyst,ova,other,
        comment,registerdby,aprovedby,aproveddate,coclusionStatus}=req.body
     
      


   const Newuser=  new labResualt({
    pid,bloodGroup,rh ,hemoglobin,plateletes,wbc,rbc,rbsfbs,creatine,lft,sgot,sgpt,alp,bun,
      malaria,microfilaria,hivll,antihcv,tpha,hbsag,vdrl,pregnancy,appearance,color,ph,spgravity,
      keton,sugar,alnumin,nitrate,leukocyte,blood,rbchpf,wbchpf,epithcelllpf,heminths,cyst,ova,other,
      comment,registerdby,aprovedby,aproveddate,coclusionStatus
   })
   await Newuser.save()

   res.status(200).json({success:true,message:"User Created Successfully.", Newuser})
  } catch (error) {
    console.log(error)
  return  res.status(500).json({success:false,message:"Interl server eror"})
  }
}



 get=  (req, res, next)=>{
    labResualt.find().exec().then(docs=>{
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
  labResualt.findById(id).then(doc=>{
    console.log(doc);
     
    res.status(200).json(doc);

   }) .catch(err=>{
    console.log(err);
    res.status(500).json({
        error:err
    });
});
  }
  getL = async (req, res) => {
    const patientId = req.params.pid;
  
    // Check if patientId is provided
    if (!patientId) {
      return res.status(400).send('Patient ID is required');
    }
  
    try {
      // Convert patientId to ObjectId
      const objectId = new mongoose.Types.ObjectId(patientId);
  
      // Fetch data using the ObjectId
      const vitalData = await labResualt.find({ pid: objectId }).exec();
      res.json(vitalData);
    } catch (err) {
      console.error('Error fetching vital data:', err);
      res.status(500).send('Error fetching vital data');
    }
  };
////////update user api
Updated=async(req,res)=>{
 try {
     const userId=req.params.id
 
 const updateuser=await labResualt.findByIdAndUpdate(userId,req.body,{new:true})
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
   const deletuser= await labResualt.findByIdAndDelete(userId)
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
module.exports=LabresultController;

