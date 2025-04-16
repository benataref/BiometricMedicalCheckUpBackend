const mongoose = require('mongoose');
const User = require('../models/User');

class userController {
  create = async (req, res) => {
    try {
      const { username, password, role, fullName } = req.body;

      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ success: false, message: 'Username already exists' });
      }

      const newUser = new User({ username, password, role, fullName });
      await newUser.save();

      res.status(200).json({ success: true, message: 'User Created Successfully', newUser });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  };

  get = (req, res) => {
    User.find().select('-password').exec()
      .then(docs => res.status(200).json(docs))
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  };

  getById = (req, res) => {
    const id = req.params.id;
    User.findById(id).select('-password').then(doc => {
      res.status(200).json(doc);
    }).catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
  };

  update = async (req, res) => {
    try {
      const userId = req.params.id;
      const updateData = { ...req.body };
      if (updateData.password) {
        const bcrypt = require('bcrypt');
        updateData.password = await bcrypt.hash(updateData.password, 10);
      }

      const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true }).select('-password');

      if (!updatedUser) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }

      res.status(200).json({ success: true, message: 'User updated successfully', updatedUser });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  };

  delete = async (req, res) => {
    try {
      const userId = req.params.id;
      const deletedUser = await User.findByIdAndDelete(userId);

      if (!deletedUser) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }

      res.status(200).json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  };
}

module.exports = new userController();
