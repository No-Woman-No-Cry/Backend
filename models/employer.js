'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employer.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    company_id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Employer',
    underscored: true,
  });
  return Employer;
};