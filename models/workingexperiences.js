"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class WorkingExperiences extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorkingExperiences.init(
    {
      job_seeker_id: DataTypes.BIGINT,
      company_name: DataTypes.STRING,
      position: DataTypes.STRING,
      job_desc: DataTypes.TEXT,
      start: DataTypes.DATE,
      end: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "WorkingExperiences",
      underscored: true,
    }
  );
  return WorkingExperiences;
};
