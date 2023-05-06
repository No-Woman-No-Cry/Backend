'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Job.init({
    company_id: DataTypes.BIGINT,
    job_category_id: DataTypes.BIGINT,
    job_position: DataTypes.STRING,
    job_salary_id: DataTypes.BIGINT,
    job_work_place: DataTypes.ENUM('office', 'factory', 'warehouse'),
    job_description: DataTypes.TEXT,
    job_requirements: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Job',
    underscored: true,
  });
  return Job;
};