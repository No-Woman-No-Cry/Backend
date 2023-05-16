"use strict";
const { Model } = require("sequelize");
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
      company_id: DataTypes.BIGINT,
      industry_id: DataTypes.BIGINT,
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
