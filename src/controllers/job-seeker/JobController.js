const Job = require("@models").Job;
const JobSeeker = require("@models").JobSeeker;
const JobType = require("@models").JobType;
const JobSalary = require("@models").JobSalary;
const JobExperience = require("@models").JobExperience;
const JobApply = require("@models").JobApply;
const JobApplyStatus = require("@models").JobApplyStatus;
const Company = require("@models").Company;
const Skill = require("@models").Skill;
const Benefit = require("@models").Benefit;
const Industry = require("@models").Industry;
const Employer = require("@models").Employer;
const EmployerNotification = require("@models").EmployerNotification;

class JobController {
  static async getJobDetails(req, res) {
    if (!req.params.id) {
      return res.status(400).json({
        code: 400,
        success: false,
        message: "ID not supplied",
      });
    } else {
      try {
        const { id } = req.params;
        const data = await Job.findByPk(id, {
          include: [
            {
              model: Company,
              attributes: [
                "company_name",
                "company_icon",
                "company_size",
                "website_url",
                "working_place",
                "location",
              ],
              include: [
                {
                  model: Benefit,
                  as: "benefit",
                },
                {
                  model: Industry,
                  as: "industry",
                },
              ],
            },
            {
              model: JobExperience,
              as: "jobExperience",
            },
            {
              model: JobType,
              as: "jobType",
            },
            {
              model: JobSalary,
              attributes: ["minimum_salary", "maximum_salary"],
            },
            {
              model: Skill,
              as: "skill",
            },
          ],
        });
        const response = {
          id: data.id,
          company_name: data.Company.company_name,
          company_icon: data.Company.company_icon,
          job_title: data.job_position,
          job_description: data.job_description,
          job_requirements: data.job_requirements,
          job_information: {
            job_experience: data.jobExperience.map((job_experience) => {
              return {
                experince_name: job_experience.job_experience_name,
              };
            }),
            work_location: data.job_work_place,
            job_type: data.jobType.map((jt) => {
              return {
                type: jt.job_type_name,
              };
            }),
            salary: `${data.JobSalary.minimum_salary} - ${data.JobSalary.maximum_salary}`,
          },
          skill_needed: data.skill.map((s) => {
            return {
              skill_name: s.skill_name,
            };
          }),
          benefits: data.Company.benefit.map((ben) => {
            return {
              id: ben.id,
              name: ben.benefit_name,
              icon: ben.icon,
            };
          }),
          insight: [
            {
              industry: data.Company.industry
                .map((ind) => ind.industry_name)
                .join(", "),
              location: data.Company.location,
              company_size: data.Company.company_size,
              working_place: data.Company.working_place,
              website: data.Company.website_url,
            },
          ],
        };

        return res.status(200).json({
          code: 200,
          success: true,
          message: "Job Fetched",
          data: response,
        });
      } catch (err) {
        console.error(err);
        return res.status(500).json({
          code: 500,
          success: false,
          message: err.message,
        });
      }
    }
  }
  static async applyJob(req, res) {
    if (!req.params.id || !req.body.job_seeker_id) {
      return res.status(400).json({
        code: 400,
        success: false,
        message: "id or job_seeker_id not supplied",
      });
    } else {
      try {
        const checkIfApplied = await JobApply.findOne({
          where: {
            job_id: parseInt(req.params.id),
            job_seeker_id: parseInt(req.body.job_seeker_id),
          },
        });

        if (checkIfApplied != null) {
          return res.status(400).json({
            code: 400,
            success: false,
            message: "Sorry, You have already applied",
          });
        } else {
          const apply = await JobApply.create({
            job_id: req.params.id,
            job_seeker_id: req.body.job_seeker_id,
          });
          const saveStatus = await JobApplyStatus.create({
            job_apply_id: apply.id,
            status: "pending",
          });
          const getJob = await Job.findByPk(req.params.id, {
            include: [
              {
                model: Company,
                include: [
                  {
                    model: Employer,
                  },
                ],
              },
            ],
          });
          const sendNotificationToEmployer = await EmployerNotification.create({
            employer_id: getJob.Company.Employer.id,
            notification_message: `Pekerjaan ${getJob.job_position} yang anda post dilamar seseorang`,
            notification_date: new Date(),
            is_read: false,
          });
          return res.status(200).json({
            code: 200,
            success: true,
            message: "Job Applied!",
          });
        }
      } catch (err) {
        console.error(err);
        return res.status(500).json({
          code: 500,
          success: false,
          message: err.message,
        });
      }
    }
  }
}

module.exports = JobController;
