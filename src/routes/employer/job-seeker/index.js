const express = require("express");
const router = express.Router();
const JobSeekerController = require("@controllers/employer/JobSeekerController");

router.get("/:profile_id", JobSeekerController.getJobSeekerDetail);

module.exports = router;
