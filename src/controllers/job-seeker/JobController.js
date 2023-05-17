const Job = require("@models").Job;
const JobType = require("@models").JobType;
const JobSalary = require("@models").JobSalary;
const JobExperience = require("@models").JobExperience;
const Company = require("@models").Company;
const Skill = require("@models").Skill;
const Benefit = require("@models").Benefit;
const Industry = require("@models").Industry;

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
}

module.exports = JobController;
