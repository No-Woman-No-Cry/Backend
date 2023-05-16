"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class EmployerNotification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EmployerNotification.init(
    {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      employer_id: DataTypes.BIGINT,
      notification_message: DataTypes.STRING,
      notification_date: DataTypes.DATE,
      is_read: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "EmployerNotification",
      tableName: "EmployerNotifications",
      underscored: true,
    }
  );
  return EmployerNotification;
};
