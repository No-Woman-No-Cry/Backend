const Company = require("@models").Company;
const Job = require("@models").Job;
const JobSeeker = require("@models").JobSeeker;
const JobCategory = require("@models").JobCategory;
const JobApply = require("@models").JobApply;
const JobApplyStatus = require("@models").JobApplyStatus;
const Benefit = require("@models").Benefit;
const Industry = require("@models").Industry;
const JobExperience = require("@models").JobExperience;
const JobExperienceRequirement = require("@models").JobExperienceRequirement;
const JobType = require("@models").JobType;
const JobTypeRequirement = require("@models").JobTypeRequirement;
const JobSalary = require("@models").JobSalary;
const Skill = require("@models").Skill;
const { Op } = require("sequelize");

class JobController {
  static async getAllMyJob(req, res) {
    const { company_id } = req.params;
    try {
      const data = await Company.findByPk(company_id, {
        include: [
          {
            model: Job,
            attributes: ["id", "job_position"],
            include: [
              {
                model: JobCategory,
                attributes: ["category_name"],
              },
            ],
          },
        ],
      });
      if (data.Jobs.length == 0) {
        return res.status(404).json({
          code: 404,
          success: true,
          message: "No jobs found",
          data: [],
        });
      }

      const transformedJobs = data.Jobs.map((job) => {
        return {
          job_id: job.id,
          job_title: job.job_position,
          job_category: job.JobCategory.category_name,
        };
      });

      return res.status(200).json({
        code: 200,
        success: true,
        message: "My Jobs Fetched",
        data: transformedJobs,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  static async getMyJobDetail(req, res) {
    try {
      if (!req.params.company_id || !req.params.job_id) {
        return res.status(400).json({
          code: 400,
          success: false,
          message: "company_id or job_id not supplied",
        });
      } else {
        try {
          const { job_id } = req.params;
          const data = await Job.findByPk(job_id, {
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
              {
                model: JobApply,
                include: [
                  {
                    model: JobSeeker,
                  },
                  {
                    model: JobApplyStatus,
                    attributes: ["id", "status"],
                  },
                ],
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
            applicant: data.JobApplies.map((applies) => {
              return {
                job_seeker_id: applies.JobSeeker.id,
                name: applies.JobSeeker.fullname,
                status:
                  applies.JobApplyStatuses[applies.JobApplyStatuses.length - 1]
                    .status,
              };
            }),
          };

          return res.status(200).json({
            code: 200,
            success: true,
            message: "My Job Fetched",
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

      return res.status(200).json({
        code: 200,
        success: true,
        message: "My Jobs Fetched",
        data: transformedJobs,
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
  static async updateStatusMyJobsApplicant(req, res) {
    if (!req.params.job_id || !req.params.profile_id) {
      return res.status(400).json({
        code: 400,
        success: false,
        message: "job_id or profile_id is required",
      });
    }
    try {
      const { job_id, profile_id } = req.params;
      const { status } = req.body;
      const job_apply = await JobApply.findOne({
        where: {
          job_id: job_id,
          job_seeker_id: profile_id,
        },
      });
      const update_status = await JobApplyStatus.update(
        {
          status: status,
        },
        {
          where: {
            job_apply_id: job_apply.id,
          },
        }
      );
      return res.status(200).json({
        code: 200,
        success: true,
        message: "Status changed",
      });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
  static async postMyJob(req, res) {
    try {
      const {
        company_id,
        job_category_id,
        job_position,
        job_salary_id,
        job_work_place,
        job_description,
        job_requirement,
        job_type,
        job_experience_requirement,
      } = req.body;

      const insertJob = await Job.create({
        company_id: company_id,
        job_category_id: job_category_id,
        job_position: job_position,
        job_salary_id: job_salary_id,
        job_work_place: job_work_place,
        job_description: job_description,
        job_requirements: job_requirement,
      });

      const getJobTypeId = await JobType.findAll({
        attributes: ["id"],
        where: {
          job_type_name: {
            [Op.in]: job_type,
          },
        },
      });
      const getExperienceId = await JobExperience.findAll({
        attributes: ["id"],
        where: {
          job_experience_name: {
            [Op.in]: job_experience_requirement,
          },
        },
      });
      // Insert ke ke JobTypeRequirement table
      for (let i = 0; i < getJobTypeId.length; i++) {
        await JobTypeRequirement.create({
          job_id: insertJob.id,
          job_type_id: getJobTypeId[i].id,
        });
      }
      // Insert ke ke JobExperienceRequirement table
      for (let i = 0; i < getExperienceId.length; i++) {
        await JobExperienceRequirement.create({
          job_id: insertJob.id,
          job_experience_id: getExperienceId[i].id,
        });
      }
      return res.status(200).json({
        code: 200,
        success: true,
        message: "Job Posted",
      });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  }
}
module.exports = JobController;
