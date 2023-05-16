"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Educations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Educations.init(
    {
      job_seeker_id: DataTypes.BIGINT,
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
