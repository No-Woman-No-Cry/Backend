const express = require("express");
const router = express.Router();
const NotificationController = require("@controllers/employer/NotificationController");

router.get("/:employer_id", NotificationController.getAllMyNotification);

module.exports = router;
