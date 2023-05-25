const express = require("express");
const router = express.Router();

const SkillController = require("@controllers/employer/SkillController");

router.get("/post-job/skills", SkillController.getAllSkill);

module.exports = router;
