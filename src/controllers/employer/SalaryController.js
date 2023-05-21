class SalaryController {
  static async getAllSalary(req, res) {
    return res.json({
      message: "getAllSalary() has accessed",
    });
  }
}

module.exports = SalaryController;
