"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JobApplyStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JobApplyStatus.init(
    {
      job_apply_id: DataTypes.BIGINT,
      status: DataTypes.ENUM("pending", "accepted", "rejected"),
    },
    {
      sequelize,
      modelName: "JobApplyStatus",
      tableName: "JobApplyStatuses",
      underscored: true,
    }
  );
  return JobApplyStatus;
};
