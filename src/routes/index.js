const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Variables for job seeker
const globalMiddleware = require("@middleware/globalMiddleware");
const auth = require("./job-seeker/authentication");
const profile = require("./job-seeker/profile");
const main = require("./job-seeker/main_page");
const companies = require("./job-seeker/companies_list");
const jobs = require("./job-seeker/jobs");
const notification_user = require("./job-seeker/notification");
const history = require("./job-seeker/history");
const employer_auth = require("./employer/authentication");
const employer_company = require("./employer/my-company");
const employer_jobs = require("./employer/my-jobs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes for Job Seeker
app.use("/auth", auth);

// Middleware global, why "/auth" not use this middleware because it not requires middleware
app.use(globalMiddleware.check);

// Routes for Job Seeker
app.use("/profile", profile);
app.use("/main", main);
app.use("/companies", companies);
app.use("/jobs", jobs);
app.use("/notification", notification_user);
app.use("/history", history);

// Route for Company
app.use("/employer/auth", employer_auth);
app.use("/employer/my-company", employer_company);
app.use("/employer/my-jobs", employer_jobs);
// app.use("/employer/profile", employer_auth);
module.exports = app;
