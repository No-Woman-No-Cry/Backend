const Company = require("@models").Company;
const Benefit = require("@models").Benefit;
const CompanyBenefits = require("@models").CompanyBenefits;
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
    const company_id = req.params.company_id; // ID perusahaan yang akan diupdate
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
      const company = await Company.findByPk(company_id);

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

  static async getCompanyBenefit(req, res) {
    const { company_id } = req.params;
    try {
      const data = await Company.findByPk(company_id, {
        include: [
          {
            model: Benefit,
            as: "benefit",
            attributes: ["benefit_name", "icon"],
          },
        ],
      });
      return res.json({
        code: 200,
        success: true,
        message: "My Company Benefits Fetched",
        data: data.benefit.map((ben) => {
          return {
            id: ben.id,
            name: ben.benefit_name,
            icon: ben.icon,
          };
        }),
      });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  static async addCompanyBenefit(req, res) {
    const company_id = req.params.company_id;
    const benefit_id = req.body.benefit_id;

    try {
      for (let i = 0; i < benefit_id.length; i++) {
        await CompanyBenefits.create({
          company_id: company_id,
          benefit_id: benefit_id[i],
        });
      }
      return res.json({
        code: 200,
        success: true,
        message: "My Company Benefits Added",
      });
    } catch (err) {
      return res.status(500).json({
        error: err.message,
      });
    }
  }
}

module.exports = CompanyController;
