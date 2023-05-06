"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("JobApplies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      job_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "Jobs",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      job_seeker_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "JobSeekers",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
    await queryInterface.addConstraint("JobApplies", {
      type: "foreign key",
      fields: ["job_id"],
      name: "job_applies_job_id_fkey",
      references: {
        table: "Jobs",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    await queryInterface.addConstraint("JobApplies", {
      type: "foreign key",
      fields: ["job_seeker_id"],
      name: "job_applies_job_seeker_id_fkey",
      references: {
        table: "JobSeekers",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("JobApplies");
  },
};
