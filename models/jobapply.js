"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JobApply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JobApply.init(
    {
      job_id: DataTypes.BIGINT,
      job_seeker_id: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: "JobApply",
      tableName: "JobApplies",
      underscored: true,
    }
  );
  return JobApply;
};
