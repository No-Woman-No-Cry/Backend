const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user.js");

const router = express.Router();

router.post("/auth/register", async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "Registrasi User Berhasil" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
