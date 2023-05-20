"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JobExperience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.JobExperience, {
        through: models.JobExperienceRequirement,
        as: "jobExperience",
        foreignKey: "job_experience_id",
      });
    }
  }
  JobExperience.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      job_experience_name: DataTypes.ENUM(
        "fresh_graduate",
        "junior",
        "middle",
        "senior"
      ),
    },
    {
      sequelize,
      modelName: "JobExperience",
      tableName: "JobExperiences",
      underscored: true,
    }
  );
  return JobExperience;
};
