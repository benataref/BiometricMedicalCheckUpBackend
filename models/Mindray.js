const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const mindrayResultSchema= new mongoose.Schema({
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


const Mindray= mongoose.model('Mindray',mindrayResultSchema)

module.exports = Mindray;