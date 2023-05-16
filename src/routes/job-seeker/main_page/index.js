const express = require("express");
const router = express.Router();
const MainPageController = require("@controllers/job-seeker/MainPageController");
// Routing main page disini
router.post("/jobs", MainPageController.getAllJobs);

module.exports = router;
