const express = require("express");
const CompanyPage = require("../../../controllers/job-seeker/CompanyController");
const router = express.Router();
// Routing companies list disini
router.get("/companies", CompanyPage.companylist);
router.get("/companies", CompanyPage.companydetail);
module.exports = router;
