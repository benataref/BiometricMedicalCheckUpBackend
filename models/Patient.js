const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//const ObjectId=mongoose.Schema.ObjectId;


const pschema=new mongoose.Schema({
    //_Id:{ type: Number, index: true, unique: true },
    //_id:{type:ObjectId , auto:true},
    photo:{
        type:String,
        required:true
         }, 
    fingerKey:{
        type:String
      
     },
      
    passPort :{
            type:String,
            required:true
        },
    labourId :{
            type:String,
            required:true
        },
    pissuedD:{
            type:Date,
            required:true
        },
       
    pExpireD:{
            type:Date,
            required:true
        },
    fname:{
        type:String,
        required:true
    }, 
    mname:{
        type:String,
        required:true
    }, 
    lname:{
        type:String,
        required:true
    }, 
    nationality :{
        type:String,
        required:true
       },
       dob :{
        type:Date,
        required:true
    },
    gender: {
        type:String,
        required:true
    },
    age: {
        type:Number,
        required:true
    },
    marrietalStatus: {
        type:String,
        required:true
    },
    relogion: {
        type:String,
        required:true
    },
    travelingto :{
        type:String,
        required:true
    },
    jobtitel :{
        type:String,
        required:true
       },
    cpr:{
    type:String,
    required:true
    },
    agency:{
    type:String,
    required:true
     },
    phone:{
    type:String,
    required:true
    },

    ispayed: {
        type: String,
        required:true
        //default: false,
       // set: v => v === 'true' || v === true
    }
},{timestamps:true})

const patient =mongoose.model('Patient' ,pschema);

module.exports=patient;

