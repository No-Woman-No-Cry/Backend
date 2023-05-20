const { Educations } = require("@models"); // Import model Educations

class EducationController {
  // Menampilkan data pendidikan berdasarkan ID JobSeeker
  static async getEducationById(req, res) {
    const { profile_id } = req.params;

    try {
      const educations = await Educations.findAll({
        where: {
          job_seeker_id: profile_id,
        },
        attributes: ["id", "name", "degree", "major", "start", "end"],
      });
      const transformedEducation = educations.map((education) => {
        return {
          education_id: education.id,
          name: education.name,
          degree: education.degree,
          major: education.major,
          start: education.start,
          end: education.end,
        };
      });
      return res.status(200).json({
        code: 200,
        success: true,
        message: "Education Info Fetched",
        data: transformedEducation,
      });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  // Menambahkan data pendidikan baru
  static async addEducationById(req, res) {
    const { profile_id } = req.params;
    const { name, degree, major, start, end } = req.body;

    try {
      const education = await Educations.create({
        job_seeker_id: profile_id,
        name,
        degree,
        major,
        start,
        end,
      });
      return res.status(201).json({
        code: 201,
        success: true,
        message: "Education Added",
      });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  // Mengupdate data pendidikan berdasarkan ID
  static async updateEducationById(req, res) {
    const { education_id, name, degree, major, start, end } = req.body;

    try {
      const education = await Educations.findByPk(education_id);
      if (education) {
        await education.update({ name, degree, major, start, end });
        return res.status(200).json({
          code: 200,
          success: true,
          message: "Education Updated",
        });
      }
      return res.status(404).json({
        code: 404,
        success: false,
        message: "Education not found",
      });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  // Menghapus data pendidikan berdasarkan ID
  static async deleteEducationById(req, res) {
    const { education_id } = req.body;

    try {
      const education = await Educations.findByPk(education_id);
      if (education) {
        await education.destroy();
        return res.status(200).json({
          code: 200,
          success: true,
          message: "Education deleted",
        });
      }
      return res.status(404).json({
        code: 404,
        success: false,
        message: "Education not found",
      });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = EducationController;
