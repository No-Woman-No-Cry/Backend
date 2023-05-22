const express = require("express");
const router = express.Router();
const BenefitController = require("@controllers/employer/BenefitController");
const IndustryController = require("@controllers/employer/IndustryController");
const CompanyController = require("@controllers/employer/CompanyController");

router.get("/benefit/benefits", BenefitController.getAllBenefit);
router.get("/industry/industries", IndustryController.getAllIndustry);

router.get("/basic/:company_id", CompanyController.getBasicInfoCompany);
router.put("/basic/:company_id", CompanyController.updateBasicInfoCompany);

module.exports = router;
