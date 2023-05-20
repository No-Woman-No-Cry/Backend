"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Benefit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Benefit, {
        through: models.CompanyBenefits,
        as: "benefit",
        foreignKey: "benefit_id",
      });
    }
  }
  Benefit.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      icon: DataTypes.STRING,
      benefit_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Benefit",
      tableName: "Benefits",
      underscored: true,
    }
  );
  return Benefit;
};
