const express = require("express");
const router = express.Router();

const SalaryController = require("@controllers/employer/SalaryController");
const CategoryController = require("@controllers/employer/CategoryController");

router.get("/post-job/salaries", SalaryController.getAllSalary);
router.get("/post-job/categories", CategoryController.getAllCategory);

module.exports = router;
