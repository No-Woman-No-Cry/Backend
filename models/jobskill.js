"use strict";
const { Model } = require("sequelize");
const Job = require("./job");
const Skill = require("./skill");

module.exports = (sequelize, DataTypes) => {
  class JobSkill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JobSkill.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      skill_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: Skill,
          key: "id",
        },
      },
      job_id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: Job,
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "JobSkill",
      tableName: "JobSkills",
      underscored: true,
    }
  );
  return JobSkill;
};
