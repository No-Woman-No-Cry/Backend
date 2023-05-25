const express = require("express");
const router = express.Router();
const CategoryController = require("@controllers/employer/CategoryController");
const SalaryController = require("@controllers/employer/SalaryController");
const JobController = require("@controllers/employer/JobController");
const SkillController = require("@controllers/employer/SkillController");

router.get("/post-job/categories", CategoryController.getAllCategory);
router.get("/post-job/salaries", SalaryController.getAllSalary);
router.get("/post-job/skills", SkillController.getAllSkill);

router.get("/:company_id", JobController.getAllMyJob);
router.get("/:company_id/:job_id", JobController.getMyJobDetail);
router.post("/:job_id/:profile_id", JobController.updateStatusMyJobsApplicant);
router.post("/post-job", JobController.postMyJob);

module.exports = router;
