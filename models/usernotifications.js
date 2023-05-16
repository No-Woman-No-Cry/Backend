"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserNotifications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserNotifications.init(
    {
      user_id: DataTypes.BIGINT,
      notification_message: DataTypes.STRING,
      notification_date: DataTypes.DATE,
      is_read: DataTypes.TINYINT,
    },
    {
      sequelize,
      modelName: "UserNotifications",
      tableName: "UserNotifications",
      underscored: true,
    }
  );
  return UserNotifications;
};
