const express=require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const multer = require('multer');
const usb = require('usb');
require('dotenv').config();
require('./utlis/db')


const apiRoutes=require('./routes/api')
const app=express();



app.use(express.json());
app.use(express.static(path.join(__dirname, './dist')));
app.use(cors());
app.use('/api', apiRoutes);
app.use('/MindrayFolder', express.static(path.join(__dirname, 'MindrayFolder')));
app.use('/maglumiFolder', express.static(path.join(__dirname, 'maglumiFolder')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/workingDemo', express.static(path.join(__dirname, 'workingDemo/')));
app.use('/Release', express.static(path.join(__dirname, 'Release/')));
app.use(morgan('dev'));

 app.get('*', (req, res, next) => {
    return res.sendFile(path.join(__dirname, './dist/index.html'));
 });    
 

const port = process.env.PORT || 8000;

 /*  app.use(compression());
 if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));  // Morgan for logging HTTP requests
 } */

    app.use(cors({
        origin:"https://biometric-medical-check-up-backend.vercel.app/",
        credentails:true
    }))
app.use(express.json());
app.listen(port,  ()=>{
    console.log(` my server is running at http://localhost:${port}`);
});
 app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        
if(req.method==='OPTIONS'){
    res.header('Access-Control-Allow-Methods','PUT','POST','PATCH','DELETE','GET');
    return res.status(200).json({});
}

next();
});
app.use((req, res, next)=>{
    const error = new Error('Not found');
    error.status=400;
    next(error);
        })
        app.use((error, req, res, next )=>{
            res.status(error.status || 500);
            res.json({
               error:{
                message:error.message
            } 
            });
        }) ; 
     