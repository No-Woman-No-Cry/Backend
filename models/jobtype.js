"use strict";
const { Model } = require("sequelize");
const JobTypeRequirement = require("./jobtyperequirement");
module.exports = (sequelize, DataTypes) => {
  class JobType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.JobType, {
        through: models.JobTypeRequirement,
        as: "jobType",
        foreignKey: "job_type_id",
      });
    }
  }
  JobType.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      job_type_name: DataTypes.ENUM("fulltime", "parttime", "intern"),
    },
    {
      sequelize,
      modelName: "JobType",
      tableName: "JobTypes",
      underscored: true,
    }
  );
  return JobType;
};
