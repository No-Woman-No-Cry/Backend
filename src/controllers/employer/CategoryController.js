class CategoryController {
  static async getAllCategory(req, res) {
    return res.json({
      message: "getAllCategory() has accessed",
    });
  }
}

module.exports = CategoryController;
