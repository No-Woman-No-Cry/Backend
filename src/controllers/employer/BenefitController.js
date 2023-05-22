const { Benefit } = require("@models"); // Import model Benefit

class BenefitController {
  static async getAllBenefit(req, res) {
    try {
      const benefits = await Benefit.findAll(); // Mengambil semua data Benefit
      const transformedBenefits = benefits.map((benefit) => {
        return {
          benefit_id: benefit.id,
          name: benefit.benefit_name,
          icon: benefit.icon,
        };
      });
      return res.status(200).json({
        code: 200,
        success: true,
        message: "Benefit Fetched",
        data: transformedBenefits,
      });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = BenefitController;
