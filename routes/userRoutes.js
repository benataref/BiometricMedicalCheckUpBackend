const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticate, authorize } = require('./middleware/auth');

// Admins only
router.post('/create', authenticate, authorize('admin'), userController.create);
router.get('/get', authenticate, authorize('admin'), userController.get);
router.get('/get/:id', authenticate, authorize('admin'), userController.getById);
router.put('/update/:id', authenticate, authorize('admin'), userController.update);
router.delete('/delete/:id', authenticate, authorize('admin'), userController.delete);

module.exports = router;
