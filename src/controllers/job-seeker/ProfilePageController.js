const JobSeeker = require("@models").JobSeeker // Import model JobSeeker

class ProfilePageController {
  // Menampilkan profil JobSeeker berdasarkan profile_ID
  static async getProfileById(req, res) {
    const { profile_id } = req.params;

    try {
      const jobSeeker = await JobSeeker.findByPk(profile_id);
      if (jobSeeker) {
        return res.status(200).json({
            code: 200,
            succcess: true,
            message: "Basic Info Fetched",
            data: jobSeeker
        });
      }
      return res.status(404).json({ 
        code: 400,
        success: false,
        message: 'Job Seeker not found', 
    });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  // Mengupdate profil JobSeeker berdasarkan profile_ID
  static async updateProfileById(req, res) {
    const { profile_id } = req.params;
    const { fullname, job_seeker_headline, whatsapp_number } = req.body;

    try {
      const jobSeeker = await JobSeeker.findByPk (profile_id);
      if (jobSeeker) {
        await jobSeeker.update({
          fullname,
          job_seeker_headline,
          whatsapp_number,
        });
        return res.status(200).json({
            code: 200,
            succcess: true,
            message: "Basic Info Updated",
        });
      }
      return res.status(404).json({ 
        code: 400,
        success: false,
        message: 'Job Seeker not found', 
    });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}

module.exports = ProfilePageController;
