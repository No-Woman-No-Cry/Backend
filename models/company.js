"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Job, { foreignKey: "company_id" });
      this.hasOne(models.Employer, { foreignKey: "company_id" });
      this.belongsToMany(models.Benefit, {
        through: models.CompanyBenefits,
        as: "benefit",
        foreignKey: "company_id",
      });
      this.belongsToMany(models.Industry, {
        through: models.CompanyIndustry,
        as: "industry",
        foreignKey: "company_id",
      });
    }
  }
  Company.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      company_icon: DataTypes.STRING,
      company_name: DataTypes.STRING,
      description: DataTypes.TEXT,
      location: DataTypes.TEXT,
      company_size: DataTypes.STRING,
      email: DataTypes.STRING,
      whatsapp_number: DataTypes.STRING,
      working_place: DataTypes.ENUM("onsite", "hybird", "remote"),
      website_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Company",
      tableName: "Companies",
      underscored: true,
    }
  );
  return Company;
};
