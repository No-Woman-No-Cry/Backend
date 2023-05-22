const { Industry } = require('@models'); // Import model Industry

class IndustryController {
  static async getAllIndustry(req, res) {
    try {
      const industries = await Industry.findAll(); // Mengambil semua data Industry

      return res.status(200).json({
        code: 200,
        success: true,
        message: 'Industries Fetched',
        data: industries,
      });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}

module.exports = IndustryController;
