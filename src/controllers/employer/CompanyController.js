const Company = require("@models").Company;
class CompanyController {
  static async getCompanyBasicInfo(req, res) {
    try {
      const { company_id } = req.params;
      const data = await Company.findByPk(company_id);
      const transformedData = {
        company_icon: data.company_icon,
        company_name: data.company_name,
        description: data.description,
        location: data.location,
        company_size: data.company_size,
        email: data.email,
        whatsapp_number: data.whatsapp_number,
        working_place: data.working_place,
        website_url: data.website_url,
      };
      return res.json({
        code: 200,
        success: true,
        message: "Basic Info Fetched",
        data: transformedData,
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  static async updateCompanyBasicInfo(req, res) {
    const companyId = req.params.company_id; // ID perusahaan yang akan diupdate
    const {
      company_icon_url,
      company_name,
      company_description,
      company_location,
      company_size,
      company_email,
      company_whatsapp_number,
      company_work_place,
      company_website_url,
    } = req.body; // Data perusahaan yang akan diupdate

    try {
      // Cari perusahaan berdasarkan ID
      const company = await Company.findByPk(companyId);

      // Periksa apakah perusahaan ditemukan
      if (!company) {
        return res.status(404).json({
          code: 404,
          success: true,
          message: "Company Found",
        });
      }

      // Lakukan pembaruan data perusahaan
      company.company_icon = company_icon_url;
      company.company_name = company_name;
      company.description = company_description;
      company.location = company_location;
      company.company_size = company_size;
      company.email = company_email;
      company.whatsapp_number = company_whatsapp_number;
      company.working_place = company_work_place;
      company.website_url = company_website_url;

      // Simpan perubahan ke database
      await company.save();

      return res.json({
        code: 200,
        success: true,
        message: "Basic Info Updated",
      }); // Berikan response dengan data perusahaan yang telah diupdate
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  static async getCompanyBenefit(req, res) {}
  static async updateCompanyBenefit(req, res) {}
<<<<<<< HEAD
=======

>>>>>>> 1d3ae3248abd4b5a1522cc234ab5655de3e2f40f
}

module.exports = CompanyController;
