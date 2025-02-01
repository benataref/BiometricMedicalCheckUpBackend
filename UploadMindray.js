const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'MindrayFolder/'); 
  },
  filename: (req, file, cb) => {

   cb(null, Date.now() + path.extname(file.originalname)); 
  }
});


const UploadMindray = multer({ storage: storage });

module.exports = UploadMindray;
