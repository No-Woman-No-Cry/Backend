const express = require("express");
const router = express.Router();
const NotificationController = require("@controllers/job-seeker/NotificationController.js");
// Routing notifikasi disini

router.get("/:profile_id", NotificationController.notification);
module.exports = router;
