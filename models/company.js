'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Company.init({
    company_icon: DataTypes.STRING,
    company_name: DataTypes.STRING,
    description: DataTypes.TEXT,
    location: DataTypes.TEXT,
    company_size: DataTypes.STRING,
    email: DataTypes.STRING,
    whatsapp_number: DataTypes.STRING,
    working_place: DataTypes.ENUM('onsite', 'hybird', 'remote'),
    website_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Company',
    underscored: true,
  });
  return Company;
};