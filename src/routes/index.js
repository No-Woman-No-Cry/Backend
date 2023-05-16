const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// Variables for job seeker
const auth = require("./job-seeker/authentication/index");
const profile = require("./job-seeker/profile/index");
const main = require("./job-seeker/main_page/index");
const companies = require("./job-seeker/companies_list/index");
const jobs = require("./job-seeker/jobs/index");
const notification_user = require("./job-seeker/notification/index");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes for Job Seeker
app.use("/auth", auth);
app.use("/profile", profile);
app.use("/main", main);
app.use("/companies", companies);
app.use("/jobs", jobs);
app.use("/notification", notification_user);

// Route for Company

module.exports = app;
