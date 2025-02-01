const Vital =require('../models/Vital');
const LabResualt =require('../models/LabResualt');
//const Patient =require('../models/Patient');
const xrayR =require('../models/xrayR');
const patient = require('../models/Patient');
class ReportController{
  /* getv = async (req, res) => {
    const patientId = req.params.pid; // Ensure consistency with route parameters
    try {
      const vitalData = await Vital.find({ where: {pid: patientId } });; // Use find() for MongoDB
      if (vitalData.length === 0) {
        return res.status(404).send('No vital data found');
      }
      res.json(vitalData);
    } catch (err) {
      console.error(err); // Log the error
      res.status(500).send('Error fetching vital data');
    }
  }; */
  getv = async (req, res) => {
    const patientId = req.params.pid;
    try {
      // Convert patientId to ObjectId if necessary
      const id = mongoose.Types.ObjectId(patientId);
      const vitalData = await Vital.find({ pid: id });
      res.json(vitalData);
    } catch (err) {
      console.error('Error fetching vital data:', err);
      res.status(500).send('Error fetching vital data');
    }
  };
getL= async (req, res) => {
  const patientId = req.params.pid;
  try {
    const labData = await LabResualt.find({ where: {pid: patientId } });
    res.json(labData);
  } catch (err) {
    res.status(500).send('Error fetching lab result data');
  }
};
getX= async (req, res) => {
  const patientId = req.params.pid;
  try {
    const xrayData = await xrayR.find({ where: { pid: patientId } });
    res.json(xrayData);
  } catch (err) {
    res.status(500).send('Error fetching x-ray data');
  }
};
}
module.exports=ReportController;
