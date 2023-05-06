'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobTypeRequirement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JobTypeRequirement.init({
    job_id: DataTypes.BIGINT,
    job_type_id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'JobTypeRequirement',
    underscored: true,
  });
  return JobTypeRequirement;
};