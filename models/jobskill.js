"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JobSkill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JobSkill.init(
    {
      skill_id: DataTypes.BIGINT,
      job_id: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "JobSkill",
      tableName: "JobSkill",
      underscored: true,
    }
  );
  return JobSkill;
};
