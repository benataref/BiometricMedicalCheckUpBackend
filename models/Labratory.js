const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const ObjectId=mongoose.Schema.ObjectId;

const labschema=new Schema({
//_id:mongoose.Schema.Types.ObjectId,
_id:{type:ObjectId , auto:true},
name:{type:String, required:true},
category :{type:String, required:true},
price:{type:Number, required:true},
status:{type:String, required:true},
regDate:{ type: Date, default: Date.now },
},
//{ 
   // versionKey:false 
//});
{timestamps:true})
const labratory = mongoose.model('Labratory', labschema);
module.exports = labratory;