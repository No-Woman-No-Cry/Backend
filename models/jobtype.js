"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JobType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JobType.init(
    {
      job_type_name: DataTypes.ENUM("fulltime", "parttime", "intern"),
    },
    {
      sequelize,
      modelName: "JobType",
      tableName: "JobTypes",
      underscored: true,
    }
  );
  return JobType;
};
