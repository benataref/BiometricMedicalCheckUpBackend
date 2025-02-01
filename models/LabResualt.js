const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//const ObjectId=mongoose.Schema.ObjectId;


const LabResultSchema=new mongoose.Schema({
    //_Id:{ type: Number, index: true, unique: true },
    //_id:{type:ObjectId , auto:true},
    pid: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    bloodGroup:{
        type:String,
        required:true
     },
      
    rh :{
            type:String,
            required:true
        },
    hemoglobin :{
            type:String,
            required:true
        },
    plateletes:{
            type:String,
            required:true
        },
       
    wbc:{
            type:String,
            required:true
        },
    rbc:{
        type:String,
        required:true
    }, 
    rbsfbs:{
        type:String,
        required:true
    },
    creatine:{
        type:String,
        required:true
    }, 
    lft:{
        type:String,
        required:true
    }, 
    sgot :{
        type:String,
        required:true
       },
       sgpt :{
        type:String,
        required:true
    },
    alp: {
        type:String,
        required:true
    },
    bun: {
        type:String,
        required:true
    },
    malaria: {
        type:String,
        required:true
    },
    microfilaria: {
        type:String,
        required:true
    },
    hivll :{
        type:String,
        required:true
    },
    antihcv :{
        type:String,
        required:true
       },
    tpha:{
    type:String,
    required:true
    },
    hbsag:{
    type:String,
    required:true
     },
    vdrl:{
    type:String,
    required:true
    },

    pregnancy:{
        type:String,
        required:true
    },
    appearance:{
        type:String,
        required:true
         }, 
    color:{
        type:String,
        required:true
     },
      
    ph :{
            type:String,
            required:true
        },
    spgravity :{
            type:String,
            required:true
        },
    keton:{
            type:String,
            required:true
        },
       
    sugar:{
            type:String,
            required:true
        },
    alnumin:{
        type:String,
        required:true
    }, 
    nitrate:{
        type:String,
        required:true
    }, 
    leukocyte:{
        type:String,
        required:true
    }, 
    blood :{
        type:String,
        required:true
       },
    rbchpf :{
        type:String,
        required:true
    },
    wbchpf: {
        type:String,
        required:true
    },
    epithcelllpf: {
        type:String,
        required:true
    },
    heminths: {
        type:String,
        required:true
    },
    cyst: {
        type:String,
        required:true
    },
    ova :{
        type:String,
        required:true
    },
    other :{
        type:String,
        required:true
       },
    comment:{
    type:String,
    required:true
    },
    registerdby:{
    type:String,
    required:true
     },
    aprovedby:{
    type:String,
    required:true
    },

    aproveddate:{
        type:Date,
        required:true
    },
    coclusionStatus:{
        type:String,
        required:true
    }
},{timestamps:true})

const labResualt =mongoose.model('LabResualt' ,LabResultSchema);

module.exports=labResualt;

