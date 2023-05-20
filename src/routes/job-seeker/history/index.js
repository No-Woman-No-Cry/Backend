const express = require("express");
const router = express.Router();
const HistoryController = require("@controllers/job-seeker/HistoryController");

router.get("/:profile_id", HistoryController.getHistory);

module.exports = router;
