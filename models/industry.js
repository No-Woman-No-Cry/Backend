"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Industry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Industry, {
        through: models.CompanyIndustry,
        as: "industry",
        foreignKey: "industry_id",
      });
    }
  }
  Industry.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      industry_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Industry",
      tableName: "Industries",
      underscored: true,
    }
  );
  return Industry;
};
