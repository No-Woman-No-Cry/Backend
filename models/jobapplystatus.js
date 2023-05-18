"use strict";
const { Model } = require("sequelize");
const JobApply = require("./jobapply");
module.exports = (sequelize, DataTypes) => {
  class JobApplyStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.JobApply, { foreignKey: "job_apply_id" });
    }
  }
  JobApplyStatus.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      job_apply_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: JobApply,
          key: "id",
        },
      },
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
