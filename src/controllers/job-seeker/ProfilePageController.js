const { where } = require("sequelize");

const JobSeeker = require("@models").JobSeeker; // Import model JobSeeker
const User = require("@models").User; // Import model User

class ProfilePageController {
  // Menampilkan profil JobSeeker berdasarkan profile_ID
  static async getProfileById(req, res) {
    const { profile_id } = req.params;

    try {
      const jobSeeker = await JobSeeker.findByPk(profile_id, {
        attributes: [
          "whatsapp_number",
          "fullname",
          "job_seeker_headline",
          "linkedin_url",
          "portofolio_url",
          "cv_url",
        ],
        include: [{ model: User, attributes: ["email"] }],
      });

      const transformedJobSeeker = {
        email: jobSeeker.User.email,
        name: jobSeeker.fullname,
        job_seeker_headline: jobSeeker.job_seeker_headline,
        whatsapp_number: jobSeeker.whatsapp_number,
        linkedin_url: jobSeeker.linkedin_url,
        cv_url: jobSeeker.cv_url,
        portofolio_url: jobSeeker.portofolio_url,
      };

      if (jobSeeker) {
        return res.status(200).json({
          code: 200,
          succcess: true,
          message: "Basic Info Fetched",
          data: transformedJobSeeker,
        });
      }
      return res.status(404).json({
        code: 400,
        success: false,
        message: "Job Seeker not found",
      });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  // Mengupdate profil JobSeeker berdasarkan profile_ID
  static async updateProfileById(req, res) {
    const { profile_id } = req.params;
    const {
      email,
      name,
      job_seeker_headline,
      whatsapp_number,
      portofolio_url,
      linkedin_url,
      cv_url,
    } = req.body;

    try {
      const jobSeeker = await JobSeeker.findByPk(profile_id);
      if (jobSeeker) {
        await jobSeeker.update({
          fullname: name,
          job_seeker_headline,
          whatsapp_number,
          linkedin_url,
          portofolio_url,
          cv_url,
        });
        await User.update(
          {
            email,
          },
          {
            where: {
              id: jobSeeker.user_id,
            },
          }
        );
        return res.status(200).json({
          code: 200,
          succcess: true,
          message: "Basic Info Updated",
        });
      }
      return res.status(404).json({
        code: 400,
        success: false,
        message: "Job Seeker not found",
      });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = ProfilePageController;
