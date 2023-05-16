"use strict";
const { Model } = require("sequelize");
const Job = require("./job");
const JobType = require("./jobtype");
module.exports = (sequelize, DataTypes) => {
  class JobTypeRequirement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  JobTypeRequirement.init(
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
      job_type_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: JobType,
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "JobTypeRequirement",
      tableName: "JobTypeRequirements",
      underscored: true,
    }
  );
  return JobTypeRequirement;
};
