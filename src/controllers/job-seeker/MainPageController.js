const { Op } = require("sequelize");

const Job = require("@models").Job;
const Company = require("@models").Company;
const JobSalary = require("@models").JobSalary;
const JobTypeRequirement = require("@models").JobTypeRequirement;
const JobType = require("@models").JobType;
const JobCategory = require("@models").JobCategory;
class MainPageController {
  static async getAllJobs(req, res) {
    try {
      const itemsPerPage = req.query.limit; // Jumlah item yang ingin ditampilkan per halaman
      const currentPage = req.query.page; // Halaman saat ini yang ingin ditampilkan

      const totalItems = await Job.count();
      const totalPages = Math.ceil(totalItems / itemsPerPage);

      const job_type_keyword = {};

      if (req.query.jobType) {
        job_type_keyword.job_type_name = req.query.jobType;
      }

      const job_category_id_keyword = {};

      if (req.query.categoryId) {
        job_category_id_keyword.id = req.query.categoryId;
      }

      const whereClause = {};

      // Menambahkan kondisi pencarian berdasarkan job_position jika ada
      if (req.query.searchJob) {
        whereClause[Op.or] = [
          {
            job_position: {
              [Op.like]: `%${req.query.searchJob}%`,
            },
          },
          {
            "$Company.company_name$": {
              [Op.like]: `%${req.query.searchJob}%`,
            },
          },
        ];
      }

      // Menambahkan kondisi pencarian berdasarkan job_work_place jika ada
      if (req.query.workPlace) {
        whereClause.job_work_place = req.query.workPlace;
      }

      const jobs = await Job.findAll({
        attributes: ["id", "job_position", "job_work_place"],
        include: [
          {
            model: JobCategory,
            attributes: ["category_name"],
            where: job_category_id_keyword,
          },
          {
            model: Company,
            attributes: ["company_name", "company_icon", "location"],
          },
          {
            model: JobSalary,
            attributes: ["minimum_salary", "maximum_salary"],
          },
          {
            model: JobType,
            as: "jobType",
            where: job_type_keyword,
          },
        ],
        where: whereClause,
      });

      // Transformasi jobs
      const transformedJobs = jobs.map((job) => {
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
        const { id, job_position, job_work_place } = job;
        return {
          id: id,
          job_title: job_position,
          job_category: job.JobCategory.category_name,
          company_name: job.Company.company_name,
          company_icon: job.Company.company_icon,
          location: job.Company.location,
          job_type: transformJobType,
          salary: `${job.JobSalary.minimum_salary} - ${job.JobSalary.maximum_salary}`,
          work_location: job_work_place,
        };
      });

      const response = {
        page: currentPage,
        total_pages: totalPages,
        total_jobs: totalItems,

        jobs: transformedJobs,
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
        error: err.message,
      });
    }
  }
  static async getCategories(req, res) {
    try {
      const categories = await JobCategory.findAll({
        attributes: ["id", "category_name"],
      });
      return res.status(200).json({
        code: 200,
        success: true,
        message: "Categories Fetched",
        data: categories,
      });
    } catch (err) {
      return res.status(500).json({
        error: err.message,
      });
    }
  }
  static async sortJobs() {
    const itemsPerPage = req.query.limit; // Jumlah item yang ingin ditampilkan per halaman
    const currentPage = req.query.page; // Halaman saat ini yang ingin ditampilkan

    const totalItems = await Job.count();
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const jobs = await Job.findAll({
      attributes: ["id", "job_position", "job_work_place"],
      limit: itemsPerPage,
      offset: (currentPage - 1) * itemsPerPage,
      include: [
        {
          model: Company,
          attributes: ["company_name", "company_icon", "location"],
        },
        {
          model: JobType,
          as: "jobType",
          // attributes: ["minimum_salary", "maximum_salary"],
        },
      ],
    });
  }
}

module.exports = MainPageController;
