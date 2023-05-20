"use strict";
const { Model } = require("sequelize");
const Company = require("./company");
const Industry = require("./industry");
module.exports = (sequelize, DataTypes) => {
  class CompanyIndustry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CompanyIndustry.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      company_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: Company,
          key: "id",
        },
      },
      industry_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: Industry,
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "CompanyIndustry",
      tableName: "CompanyIndustries",
      underscored: true,
    }
  );
  return CompanyIndustry;
};
