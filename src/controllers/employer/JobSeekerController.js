const JobSeeker = require("@models").JobSeeker;
const Educations = require("@models").Educations;
const User = require("@models").User;

class JobSeekerController {
  static async getJobSeekerDetail(req, res) {
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
        include: [
          { model: User, attributes: ["email"] },
          {
            model: Educations,
            attributes: ["name", "degree", "major", "start", "end"],
          },
        ],
      });

      const transformedJobSeeker = {
        email: jobSeeker.User.email,
        name: jobSeeker.fullname,
        job_seeker_headline: jobSeeker.job_seeker_headline,
        whatsapp_number: jobSeeker.whatsapp_number,
        linkedin_url: jobSeeker.linkedin_url,
        cv_url: jobSeeker.cv_url,
        portofolio_url: jobSeeker.portofolio_url,
        educations: jobSeeker.Educations,
      };

      if (jobSeeker) {
        return res.status(200).json({
          code: 200,
          succcess: true,
          message: "Job Seeker Profile Fetched",
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
      return res.status(500).json({ message: error.message });
    }
  }
}
module.exports = JobSeekerController;
