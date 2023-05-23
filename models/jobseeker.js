"use strict";
const { Model } = require("sequelize");
const User = require("./user");
module.exports = (sequelize, DataTypes) => {
  class JobSeeker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "user_id" });
      this.hasMany(models.JobApply, { foreignKey: "job_seeker_id" });
      this.hasMany(models.Educations, { foreignKey: "job_seeker_id" });
    }
  }
  JobSeeker.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: User,
          key: "id",
        },
      },
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
      tableName: "JobSeekers",
      underscored: true,
    }
  );
  return JobSeeker;
};
