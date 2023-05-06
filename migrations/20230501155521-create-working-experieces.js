"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("WorkingExperiences", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      job_seeker_id: {
        type: Sequelize.BIGINT,
        references: {
          model: "JobSeekers",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      company_name: {
        type: Sequelize.STRING,
      },
      position: {
        type: Sequelize.STRING,
      },
      job_desc: {
        type: Sequelize.TEXT,
      },
      start: {
        type: Sequelize.DATE,
      },
      end: {
        type: Sequelize.DATE,
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
    await queryInterface.addConstraint("WorkingExperiences", {
      type: "foreign key",
      fields: ["job_seeker_id"],
      name: "working_experiences_job_seeker_id_fkey",
      references: {
        table: "JobSeekers",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("WorkingExperiences");
  },
};
