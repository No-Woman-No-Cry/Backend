const express = require("express");
const CompanyPage = require("../../../controllers/job-seeker/CompanyController");
const router = express.Router();
// Routing companies list disini
router.get("/company", CompanyPage.companylist);
router.get("/company", CompanyPage.companydetail);
module.exports = router;
