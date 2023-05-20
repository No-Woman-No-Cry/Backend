"use strict";
const { Model } = require("sequelize");
const Job = require("./job");
const JobExperience = require("./jobexperience");
module.exports = (sequelize, DataTypes) => {
  class JobExperienceRequirement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JobExperienceRequirement.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      job_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: Job,
          key: "id",
        },
      },
      job_experience_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: JobExperience,
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "JobExperienceRequirement",
      tableName: "JobExperienceRequirements",
      underscored: true,
    }
  );
  return JobExperienceRequirement;
};
