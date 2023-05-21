class BenefitController {
  static async getAllBenefit(req, res) {
    return res.json({
      message: "getAllBenefit() has accessed",
    });
  }
}

module.exports = BenefitController;
