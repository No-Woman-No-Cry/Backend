"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserSkill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserSkill.init(
    {
      job_seeker_id: DataTypes.BIGINT,
      skill_id: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "UserSkill",
      tableName: "UserSkills",
      underscored: true,
    }
  );
  return UserSkill;
};
