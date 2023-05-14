const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.js');


router.post('/auth/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
      const token = jwt.sign({ userId: user._id }, 'secretkey');
      res.status(200).json({ token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

  module.exports = router;