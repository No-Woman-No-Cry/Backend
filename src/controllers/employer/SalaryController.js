const { JobSalary } = require('@models'); // Import model JobSalary

class SalaryController {
  static async getAllSalary(req, res) {
    try {
      const salaries = await JobSalary.findAll(); // Mengambil semua data JobSalary

      return res.status(200).json({
        code: 200,
        success: true,
        message: 'Job Salaries Fetched',
        data: salaries,
      });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}

module.exports = SalaryController;
