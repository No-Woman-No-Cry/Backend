const express = require("express");
const router = express.Router();
const BenefitController = require("@controllers/employer/BenefitController");
const IndustryController = require("@controllers/employer/IndustryController");

router.get("/benefit/benefits", BenefitController.getAllBenefit);
router.get("/industry/industries", IndustryController.getAllIndustry);

module.exports = router;
