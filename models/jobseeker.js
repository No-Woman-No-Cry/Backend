"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JobSeeker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JobSeeker.init(
    {
      id: DataTypes.BIGINT,
      user_id: DataTypes.BIGINT,
      fullname: DataTypes.STRING,
      job_seeker_headline: DataTypes.STRING,
      whatsapp_number: DataTypes.STRING,
      linkedin_url: DataTypes.STRING,
      portofolio_url: DataTypes.STRING,
      cv_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "JobSeeker",
      underscored: true,
    }
  );
  return JobSeeker;
};
