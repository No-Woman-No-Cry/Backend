const express = require("express");
const router = express.Router();
const ProfilePageController = require("@controllers/job-seeker/ProfilePageController");
const EducationController = require("@controllers/job-seeker/EducationController");
//basic
router.get("/basic/:profile_id",ProfilePageController.getProfileById);
router.put("/basic/:profile_id",ProfilePageController.updateProfileById);

//education
router.get("/education/:profile_id",EducationController.getEducationById);
router.post("/education/:profile_id",EducationController.addEducationById);
router.put("/education/:profile_id",EducationController.updateEducationById);
router.delete("/education/:profile_id",EducationController.deleteEducationById);


module.exports = router;
