const express = require("express");
const router = express.Router();
const BenefitController = require("@controllers/employer/BenefitController");
const IndustryController = require("@controllers/employer/IndustryController");
const CompanyController = require("@controllers/employer/CompanyController");

router.get("/benefit/benefits", BenefitController.getAllBenefit);
router.get("/industry/industries", IndustryController.getAllIndustry);

router.get("/basic/:company_id", CompanyController.getCompanyBasicInfo);
router.put("/basic/:company_id", CompanyController.updateCompanyBasicInfo);

router.get("/benefit/:company_id", CompanyController.getCompanyBenefit);
router.post("/benefit/:company_id", CompanyController.addCompanyBenefit);

router.get("/industry/:company_id", CompanyController.getCompanyIndustry);
router.post("/industry/:company_id", CompanyController.addCompanyIndustry);

module.exports = router;
