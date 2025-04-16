// controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');

class AuthController {
  register = async (req, res) => {
    try {
      const { username, password, role, fullName } = req.body;
      const user = new User({ username, password, role, fullName });
      await user.save();
      res.status(201).json({ success: true, message: "User registered successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: "Error registering user" });
    }
  };

  login = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) return res.status(401).json({ message: "Invalid credentials" });

      const isMatch = await user.comparePassword(password);
      if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

      const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: '1d'
      });

      res.json({ success: true, token, user: { username: user.username, role: user.role } });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Login failed" });
    }
  };
}

module.exports = new AuthController();
