const Job = require("@models").Job;
const JobApply = require("@models").JobApply;
const JobApplyStatus = require("@models").JobApplyStatus;
const Company = require("@models").Company;
class HistoryController {
  static async getHistory(req, res) {
    try {
      const data = await JobApply.findAll({
        where: {
          job_seeker_id: req.params.profile_id,
        },
        include: [
          {
            model: JobApplyStatus,
            attributes: ["id", "status"],
          },
          {
            model: Job,
            attributes: ["job_position"],
            include: [
              {
                model: Company,
                attributes: ["company_name"],
              },
            ],
          },
        ],
      });
      const transformedData = data.map((d) => {
        return {
          id: d.id,
          status: d.JobApplyStatuses[0].status,
          position: d.Job.job_position,
          company: d.Job.Company.company_name,
        };
      });
      return res.status(200).json({
        code: 200,
        success: true,
        message: "History Fetched",
        data: transformedData,
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

module.exports = HistoryController;
