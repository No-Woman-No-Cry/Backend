"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("EmployerNotifications", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      employer_id: {
        type: Sequelize.BIGINT,
        references: {
          model: "Employers",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      notification_message: {
        type: Sequelize.STRING,
      },
      notification_date: {
        type: Sequelize.DATE,
      },
      is_read: {
        type: Sequelize.BOOLEAN,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addConstraint("EmployerNotifications", {
      type: "foreign key",
      fields: ["employer_id"],
      name: "employer_notifications_employer_id_fkey",
      references: {
        table: "Employers",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("EmployerNotifications");
  },
};
