const mongoose=require('mongoose');
const Schema=mongoose.Schema;
//const ObjectId=mongoose.Schema.ObjectId;

const vitalSchema= new mongoose.Schema({
    pid: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    medicalillness:{
        type:String,
        required:true
    }, 
       disablity:{
        type:String,
        required:true
    },
    alergy:{
        type:String,
        required:true
    },
    previousAdAc:{
        type:String,
        required:true
    }, 
    height:{
        type:String,
        required:true
    }, 
    weight:{
        type:String,
        required:true
    },
    bmi:{
        type:String,
        required:true
    },
    bloodpresur:{
        type:String,
        required:true
    },
        pulsmin:{
        type:String,
        required:true
    }, 
       rrmin:{
        type:String,
        required:true
    },
    colorvision:{
        type:String,
        required:true
    },
    temp:{
        type:String,
        required:true
    },
    spo2:{
        type:String,
        required:true
    },
    vol:{
        type:String,
        required:true
    },
    prythm:{
        type:String,
        required:true
    },
       hearingLeft:{
        type:String,
        required:true
    },        
    hearingright:{
        type:String,
        required:true
    },
    visualacuty:{
        type:String,
        required:true
    }, 
       unaidedL6N:{
        type:String,
        required:true
    },
    unaidedR6N:{
        type:String,
        required:true
    },
    aidedL20N:{
        type:String,
        required:true
    }, 
    aidedR20N:{
        type:String,
        required:true
    },
    unaidedL6D:{
        type:String,
        required:true
    }, 
    unaidedR6D:{
        type:String,
        required:true
    }, 
    aidedL20D:{
        type:String,
        required:true
    },
    aidedR20D:{
        type:String,
        required:true
    },
   
    generalapperance:{
        type:String,
        required:true
    },
    Rsystem:{
        type:String,
        required:true
    },
    cvSystem:{
        type:String,
        required:true
    },
        ent:{
        type:String,
        required:true
    }, 
       heent:{
        type:String,
        required:true
    },
    breast:{
        type:String,
        required:true
    },
    precordium:{
        type:String,
        required:true
    },
    lymphnodes:{
        type:String,
        required:true
    },
    abdomen:{
        type:String,
        required:true
    },
    hemia:{
        type:String,
        required:true
    },
       exterimities:{
        type:String,
        required:true
    },        
    skin:{
        type:String,
        required:true
    },
    deformities:{
        type:String,
        required:true
    },
    back:{
        type:String,
        required:true
    },
    cns:{
        type:String,
        required:true
    },
       genitourinary:{
        type:String,
        required:true
    },        
    hydrocele:{
        type:String,
        required:true
    },
    apperance:{
        type:String,
        required:true
    }, 
       behaviour:{
        type:String,
        required:true
    },
    speech:{
        type:String,
        required:true
    },
    cognition:{
        type:String,
        required:true
    },
    memory:{
        type:String,
        required:true
    }, 
    mood:{
        type:String,
        required:true
    },
    attention:{
        type:String,
        required:true
    }, 
    orientation:{
        type:String,
        required:true
    }, 
    concentration:{
        type:String,
        required:true
    },
    thoughts:{
        type:String,
        required:true
    },
   
    cranialnerve:{
        type:String,
        required:true
    },
    MotorExam:{
        type:String,
        required:true
    },
    sensorExam:{
        type:String,
        required:true
    },
    supreficalReflexis:{
        type:String,
        required:true
    }, 
       dtr:{
        type:String,
        required:true
    },
    otherCnsExam:{
        type:String,
        required:true
    },
    finalconclution:{
        type:String,
        required:true
    },
    createdBy:{
        type:String,
        required:true
    },
    UpdatedBy:{
        type:String,
        required:true
    },
    hemia:{
        type:String,
        required:true
    },
       exterimities:{
        type:String,
        required:true
    },        
    skin:{
        type:String,
        required:true
    }

},{timestamps:true})


const vital= mongoose.model('Vital',vitalSchema)

module.exports = vital;
pid
medicalillness, 
   disablity,
alergy,
previousAdAc, 
height, 
weight,
bmi,
bloodpresur, 
pulsmin,
   rrmin,
colorvision,
temp,
spo2,
vol,
prythm,
   hearingLeft,        
hearingright,
visualacuty, 
   unaidedL6N,
unaidedR6N,
aidedL20N, 
aidedR20N,
unaidedL6D, 
unaidedR6D, 
aidedL20D,
aidedR20D,
generalapperance,
Rsystem,
cvSystem,
 ent, 
heent,
breast,
precordium,
lymphnodes,
abdomen,
hemia,
exterimities,        
skin,
deformities,
back,
cns,
genitourinary,        
hydrocele,
apperance, 
behaviour,
speech,
cognition
memory, 
mood,
attention, 
oarientation, 
concentration,
thoughts,
cranialnerve,
MotorExam,
sensorExam,
supreficalReflexis, 
dtr,
otherCnsExam,
finalconclution,
createdBy,
UpdatedBy
