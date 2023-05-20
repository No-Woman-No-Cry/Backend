const express = require("express");
const CompanyPageController = require("@controllers/job-seeker/CompanyController");
const router = express.Router();
// Routing companies list disini
router.get("/", CompanyPageController.companylist);
router.get("/:id", CompanyPageController.companydetail);
module.exports = router;
