const express = require("express");
const router = express.Router();
const JobController = require("@controllers/job-seeker/JobController");
// Routing jobs disini

router.get("/:id", JobController.getJobDetails);
router.post("/:id", JobController.applyJob);

module.exports = router;
