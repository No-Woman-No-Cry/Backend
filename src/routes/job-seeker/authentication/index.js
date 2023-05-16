const express = require("express");
const router = express.Router();
const AuthenticationController = require("@controllers/job-seeker/AuthenticationController");
router.post("/login", AuthenticationController.login);
router.post("/register", AuthenticationController.register);

module.exports = router;
