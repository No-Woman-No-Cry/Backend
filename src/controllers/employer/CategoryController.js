const { JobCategory } = require('@models'); // Import model JobCategory

class CategoryController {
  static async getAllCategory(req, res) {
    try {
      const categories = await JobCategory.findAll(); // Mengambil semua data JobCategory

      return res.status(200).json({
        code: 200,
        success: true,
        message: 'Job Categories Fetched',
        data: categories,
      });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}

module.exports = CategoryController;
