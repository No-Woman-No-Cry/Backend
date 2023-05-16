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
      // define association here
    }
  }
  JobSalary.init(
    {
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
