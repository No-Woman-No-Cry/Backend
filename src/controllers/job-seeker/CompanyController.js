const Company = require("@models").Company;
const Industry = require("@models").Industry;
const Job = require("@models").Job;
const JobCategory = require("@models").JobCategory;
const JobSalary = require("@models").JobSalary;
const JobType = require("@models").JobType;
const Benefit = require("@models").Benefit;
class CompanyPage {
  static async companylist(req, res) {
    try {
      const data = await Company.findAll({
        include: [
          {
            model: Industry,
            as: "industry",
            attribuites: ["industry_name"],
          },
          {
            model: Job,
          },
        ],
      });
      const response = data.map((d) => {
        return {
          id: d.id,
          company_name: d.company_name,
          industry: d.industry[0]?.industry_name,
          job_total: d.Jobs.length,
          icon: d.company_icon,
        };
      });

      return res.status(200).json({
        code: 200,
        success: true,
        message: "Companies Fetched",
        data: response,
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        success: false,
        message: error.message,
      });
    }
  }

  static async companydetail(req, res) {
    try {
      const id = req.params.id;
      const data = await Company.findByPk(id, {
        include: [
          {
            model: Job,
            include: [
              {
                model: JobCategory,
                attributes: ["category_name"],
              },
              {
                model: JobType,
                as: "jobType",
              },
              {
                model: JobSalary,
                attributes: ["minimum_salary", "maximum_salary"],
              },
            ],
          },
          {
            model: Industry,
            as: "industry",
            attribuites: ["industry_name"],
          },
          {
            model: Benefit,
            as: "benefit",
          },
        ],
      });

      const transformedData = {
        id: data.id,
        company_name: data.company_name,
        company_logo: data.company_icon,
        company_description: data.description,
        insight: [
          {
            industry: data.industry.map((ind) => ind.industry_name).join(", "),
            location: data.location,
            company_size: data.company_size,
            working_place: data.working_place,
            website: data.website_url,
          },
        ],
        benefits: data.benefit.map((ben) => {
          return {
            id: ben.id,
            name: ben.benefit_name,
            icon: ben.icon,
          };
        }),
        jobs: data.Jobs.map((job) => {
          let jobTypeString = "";
          const transformJobType = job.jobType
            .map((jt) => jt.job_type_name)
            .join(", ");
          /**
           "id": 1,
            "job_title": "Software Engineer",
            "company_name": "PT XYZ Technology",
            "location": "Jakarta",
            "job_type": "Full-time",
            "salary": "Rp 15.000.000",
            "work_location": "On-site"
           */
          const { job_position, job_work_place } = job;
          return {
            id: job.id,
            job_title: job_position,
            job_category: job.JobCategory.category_name,
            company_name: data.company_name,
            company_icon: data.company_icon,
            location: data.location,
            job_type: transformJobType,
            salary: `${job.JobSalary.minimum_salary} - ${job.JobSalary.maximum_salary}`,
            work_location: job_work_place,
          };
        }),
      };
      return res.status(200).json({
        code: 200,
        success: true,
        message: "Company Fetched",
        data: transformedData,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        code: 500,
        success: false,
        message: error.message,
      });
    }
  }
}

module.exports = CompanyPage;
