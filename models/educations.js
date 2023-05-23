"use strict";
const { Model } = require("sequelize");
const JobSeeker = require("./jobseeker");
module.exports = (sequelize, DataTypes) => {
  class Educations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.JobSeeker, { foreignKey: "job_seeker_id" });
    }
  }
  Educations.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      job_seeker_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: JobSeeker,
          key: "id",
        },
      },
      name: DataTypes.STRING,
      degree: DataTypes.STRING,
      major: DataTypes.STRING,
      start: DataTypes.DATE,
      end: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Educations",
      tableName: "Educations",
      underscored: true,
    }
  );
  return Educations;
};
