const express = require("express");
const router = express.Router();
const CategoryController = require("@controllers/employer/CategoryController");
const SalaryController = require("@controllers/employer/SalaryController");

router.get("/post-job/categories", CategoryController.getAllCategory);
router.get("/post-job/salaries", SalaryController.getAllSalary);

module.exports = router;
