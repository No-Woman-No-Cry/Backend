"use strict";
const Company = require("./company");
const JobSalary = require("./jobsalary");
const JobTypeRequirement = require("./jobtyperequirement");
const JobCategory = require("./jobcategory");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Company, { foreignKey: "company_id" });
      this.belongsTo(models.JobSalary, { foreignKey: "job_salary_id" });
      this.belongsTo(models.JobCategory, { foreignKey: "job_category_id" });
      this.belongsToMany(models.JobType, {
        through: models.JobTypeRequirement,
        as: "jobType",
        foreignKey: "job_id",
      });
      this.belongsToMany(models.JobExperience, {
        through: models.JobExperienceRequirement,
        as: "jobExperience",
        foreignKey: "job_id",
      });
      this.belongsToMany(models.Skill, {
        through: models.JobSkill,
        as: "skill",
        foreignKey: "job_id",
      });
      this.hasMany(models.JobApply, { foreignKey: "job_id" });
    }
  }
  Job.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      company_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: Company,
          key: "id",
        },
      },
      job_category_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: JobCategory,
          key: "id",
        },
      },
      job_position: DataTypes.STRING,
      job_salary_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: JobSalary,
          key: "id",
        },
      },
      job_work_place: DataTypes.ENUM("office", "factory", "warehouse"),
      job_description: DataTypes.TEXT,
      job_requirements: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Job",
      tableName: "Jobs",
      underscored: true,
    }
  );
  return Job;
};
