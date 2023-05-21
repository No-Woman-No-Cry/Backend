class IndustryController {
  static async getAllIndustry(req, res) {
    return res.json({
      message: "getAllIndustry() has accessed",
    });
  }
}

module.exports = IndustryController;
