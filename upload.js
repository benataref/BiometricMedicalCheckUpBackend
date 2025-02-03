const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Directory to store the uploaded files
  },
  filename: (req, file, cb) => {
   // cb(null,file.fieldname +"_", Date.now() + path.extname(file.originalname)); // Generate a unique filename
   cb(null, Date.now() + path.extname(file.originalname)); // Generate a unique filename
  }
});

// Create an upload instance
const upload = multer({ storage: storage });

module.exports = upload;