"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("JobApplyStatuses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      job_apply_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "JobApplies",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      status: {
        type: Sequelize.ENUM("pending", "accepted", "rejected"),
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
    await queryInterface.addConstraint("JobApplyStatuses", {
      type: "foreign key",
      fields: ["job_apply_id"],
      name: "job_apply_statuses_job_apply_id_fkey",
      references: {
        table: "JobApplies",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("JobApplyStatuses");
  },
};
