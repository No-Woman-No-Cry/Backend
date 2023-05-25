const { Skill } = require("@models"); // Import model Skill

class SkillController {
  static async getAllSkill(req, res) {
    try {
      const skills = await Skill.findAll({
        attributes: ["id", "skill_name"],
      }); // Mengambil semua data Skill
      const transformedSkill = skills.map((skill) => {
        return {
          skill_id: skill.id,
          skill_name: skill.skill_name,
        };
      });
      return res.status(200).json({
        code: 200,
        success: true,
        message: "Skills Fetched",
        data: transformedSkill,
      });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = SkillController;
