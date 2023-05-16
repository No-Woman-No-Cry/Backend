"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JobCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Job, { foreignKey: "job_category_id" });
    }
  }
  JobCategory.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      category_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "JobCategory",
      tableName: "JobCategories",
      underscored: true,
    }
  );
  return JobCategory;
};
