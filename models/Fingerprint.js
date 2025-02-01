const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const FingerprintSchema = new mongoose.Schema({
    userId: String,
    fingerprintData: Buffer,
});
const Fingerprint = mongoose.model('Fingerprint', FingerprintSchema);


module.exports=Fingerprint;