'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CompanyBenefits extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CompanyBenefits.init({
    company_id: DataTypes.BIGINT,
    benefit_id: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'CompanyBenefits',
    underscored: true,
  });
  return CompanyBenefits;
};