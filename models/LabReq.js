const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const ObjectId=mongoose.Schema.ObjectId;


const labreqschema=new Schema({
    _id:{type:ObjectId , auto:true},
    detail:{type:String, required:true},
    remark:{type:String, required:true}, 
    RefPhy:{type:String, required:true}, 
    payd:{type:String, required:true},
    pid: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    //lid:{ type: mongoose.Schema.Types.ObjectId, ref: 'Labratory' }
},
{timestamps:true})
const labReq=mongoose.model('LabReqs', labreqschema);
module.exports=labReq;


