const Job = require("@models").Job;
class MainPageController {
  static async getAllJobs(req, res) {
    try {
      const itemsPerPage = req.query.limit; // Jumlah item yang ingin ditampilkan per halaman
      const currentPage = req.query.page; // Halaman saat ini yang ingin ditampilkan

      const totalItems = await Job.count();
      const totalPages = Math.ceil(totalItems / itemsPerPage);

      const jobs = await Job.findAll({
        limit: itemsPerPage,
        offset: (currentPage - 1) * itemsPerPage,
      });

      const response = {
        page: currentPage,
        total_pages: totalPages,
        total_jobs: totalItems,
        jobs: jobs,
      };
      return res.status(200).json({
        code: 200,
        success: true,
        message: "Job Fetched",
        data: response,
      });
    } catch (err) {
      return res.status(500).json({
        error: err.message,
      });
    }
  }
}

module.exports = MainPageController;
