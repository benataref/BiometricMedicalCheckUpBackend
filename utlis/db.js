const mongoose=require('mongoose');
require('dotenv').config();
const mongoDB_url=process.env.MONGODB_URL; 
mongoose.connect(mongoDB_url, {});
mongoose.connection.on('error', err=>{
    console.log(err)
})
mongoose.connection.on('connected', res=>{
    console.log('connected') 
})