const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const MaglumiResultSchema= new mongoose.Schema({
    pid: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    lableName:{
        type:String,
        required:true
    },
        file:{
        type:String,
        required:true
    }
},{timestamps:true})


const Maglumi800= mongoose.model('Maglumi800',MaglumiResultSchema)

module.exports = Maglumi800;