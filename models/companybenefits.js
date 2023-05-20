"use strict";
const { Model } = require("sequelize");
const Company = require("./company");
const Benefit = require("./benefit");
module.exports = (sequelize, DataTypes) => {
  class CompanyBenefits extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CompanyBenefits.init(
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
      benefit_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: Benefit,
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "CompanyBenefits",
      tableName: "CompanyBenefits",
      underscored: true,
    }
  );
  return CompanyBenefits;
};
