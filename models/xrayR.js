const mongoose=require('mongoose');
const Schema=mongoose.Schema;



const xrayschema=new mongoose.Schema({
 
    pid: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' , 
        type:String,
        required:true},
  
      
    chestxray :{
            type:String
         
        },
    filmno :{
            type:String,
            required:true
        },
    comment:{
            type:String
           
        },
       
    conclusion:{
            type:String,
            required:true
        },
    registerdby:{
        type:String,
        required:true
    }, 
    updatedby:{
        type:String,
        required:true
    },
},
    {timestamps:true})
    const XrayR=mongoose.model('XrayR', xrayschema);
    module.exports = XrayR;

   
  
      
