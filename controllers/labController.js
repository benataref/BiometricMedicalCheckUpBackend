const labratory =require('../models/Labratory');
class labcontroller{
 create=async(req,res)=>{
  try {
      const {name,category,price,status,regDate}=req.body
   const Newuser=  new labratory({
    name,category,price,status,regDate
   })
   await Newuser.save()

   res.status(200).json({success:true,message:"User Created Successfully.", Newuser})
  } catch (error) {
    console.log(error)
  return  res.status(500).json({success:false,message:"Interl server eror"})
  }
}

///////Read api
/*get=async(req,res)=>{

   try {
     const users= await labratory.find()
    if (!users) {
      return  res.status(404).json({success:false})
    }

    res.status(200).json({users})
} catch (error) {
    console.log(error)
    
    res.status(500).json({success:false})
   }

}*/

 get=  (req, res, next)=>{
  labratory.find().exec().then(docs=>{
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
/*getone= (req, res)=>{
  const id=req.params._id;
  labratory.findById({_id:id})
  .then(result=>res.json(result))
  .catch(err=>res.json(err))
}*
 getone= (req, res, next)=>{
 const id=req.params._id;
  labratory.findById(id)
  .exec()
  .then(doc=>{
   console.log("From database", doc);  
   res.status(200).json(doc);
  })
  .catch(err=>{console.log(err);
  res.status(500).json({error: err}) ;
});
}; */
getById= (req, res)=>{
  let id=req.params.id
  labratory.findById(id).then(doc=>{
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
 
 const updateuser=await labratory.findByIdAndUpdate(userId,req.body,{new:true})
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
   const deletuser= await labratory.findByIdAndDelete(userId)
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
module.exports=labcontroller;



