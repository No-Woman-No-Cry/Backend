"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JobSalary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Job, { foreignKey: "job_salary_id" });
    }
  }
  JobSalary.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      minimum_salary: DataTypes.STRING,
      maximum_salary: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "JobSalary",
      tableName: "JobSalaries",
      underscored: true,
    }
  );
  return JobSalary;
};
