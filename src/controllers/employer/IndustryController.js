const { Industry } = require("@models"); // Import model Industry

class IndustryController {
  static async getAllIndustry(req, res) {
    try {
      const industries = await Industry.findAll({
        attributes: ["id", "industry_name"],
      }); // Mengambil semua data Industry
      const transformedIndustries = industries.map((industry) => {
        return {
          industry_id: industry.id,
          name: industry.industry_name,
          icon: industry.icon,
        };
      });
      return res.status(200).json({
        code: 200,
        success: true,
        message: "Industries Fetched",
        data: transformedIndustries,
      });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = IndustryController;
