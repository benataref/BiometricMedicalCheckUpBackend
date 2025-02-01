const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'maglumiFolder/'); 
  },
  filename: (req, file, cb) => {

   cb(null, Date.now() + path.extname(file.originalname)); 
  }
});


const UploadMaglumi800 = multer({ storage: storage });

module.exports = UploadMaglumi800;
