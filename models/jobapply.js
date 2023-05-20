"use strict";
const { Model } = require("sequelize");
const Job = require("./job");
const JobSeeker = require("./jobseeker");
module.exports = (sequelize, DataTypes) => {
  class JobApply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.JobApplyStatus, { foreignKey: "job_apply_id" });
      this.belongsTo(models.Job, { foreignKey: "job_id" });
    }
  }
  JobApply.init(
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
      job_seeker_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: JobSeeker,
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "JobApply",
      tableName: "JobApplies",
      underscored: true,
    }
  );
  return JobApply;
};
