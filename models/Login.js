const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//const ObjectId=mongoose.Schema.ObjectId;

const Loginschema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
        fathername:{
        type:String,
        required:true
    }, 
       email:{
        type:String,
        required:true
    },
         password:{
        type:String,
        required:true
    }
},{timestamps:true})


const login= mongoose.model('Login',Loginschema)

module.exports = login;