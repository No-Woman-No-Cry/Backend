const { JobCategory } = require("@models"); // Import model JobCategory

class CategoryController {
  static async getAllCategory(req, res) {
    try {
      const categories = await JobCategory.findAll({
        attributes: ["id", "category_name"],
      }); // Mengambil semua data JobCategory
      const transformedCategories = categories.map((category) => {
        return {
          category_id: category.id,
          category_name: category.category_name,
        };
      });
      return res.status(200).json({
        code: 200,
        success: true,
        message: "Job Categories Fetched",
        data: transformedCategories,
      });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = CategoryController;
