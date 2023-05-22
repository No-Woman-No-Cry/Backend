const { JobSalary } = require("@models"); // Import model JobSalary

class SalaryController {
  static async getAllSalary(req, res) {
    try {
      const salaries = await JobSalary.findAll({
        attributes: ["id", "minimum_salary", "maximum_salary"],
      }); // Mengambil semua data JobSalary
      const transformedSalaries = salaries.map((salary) => {
        return {
          salary_id: salary.id,
          min_salary: salary.minimum_salary,
          max_salary: salary.maximum_salary,
        };
      });
      return res.status(200).json({
        code: 200,
        success: true,
        message: "Job Salaries Fetched",
        data: transformedSalaries,
      });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = SalaryController;
