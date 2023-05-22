"use strict";
const { Model } = require("sequelize");
const Company = require("./company");
module.exports = (sequelize, DataTypes) => {
  class Employer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Company, { foreignKey: "company_id" });
    }
  }
  Employer.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      company_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: Company,
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Employer",
      tableName: "Employers",
      underscored: true,
    }
  );
  return Employer;
};
