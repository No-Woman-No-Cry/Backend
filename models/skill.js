"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Skill, {
        through: models.JobSkill,
        as: "skill",
        foreignKey: "skill_id",
      });
    }
  }
  Skill.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      skill_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Skill",
      tableName: "Skills",
      underscored: true,
    }
  );
  return Skill;
};
