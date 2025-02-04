const Mindray = require('../models/Mindray');

const path = require('path');
const fs = require('fs');
const multer = require('multer');
class MindrayController {
    create=async(req,res)=>{
        try {
          const { pid,lableName} = req.body;
           const   file= req.file ? req.file.path : null;
           const Newuser = new Mindray({
            pid,lableName,file
           
         });
         await Newuser.save()
         console.log('Setting status code:', 200);

      
         res.status(200).json({success:true,message:"MindrayPdf  Created Successfully.", Newuser})
        } catch (error) {
          console.log(error)
        return  res.status(500).json({success:false,message:"Interl server eror"})
        }
      
      } 

          getById = (req, res) => {
            let id = req.params.id;
            Mindray.findById(id)
                .then(doc => {
                    const pdfUrl = doc.file ? `${req.protocol}://${req.get('host')}/MindrayFolder/${path.basename(doc.file)}` : null;
                    res.status(200).json({ ...doc._doc, pdfUrl });
                })
                .catch(err => {
                    console.log(err);
                    res.status(500).json({ error: err });
                });
        };
    
      get = (req, res, next) => {
        Mindray.find().exec().then(docs => {
          console.log(docs);
          res.status(200).json(docs);
        })
          .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
          });
      };
    
    }
module.exports = MindrayController;