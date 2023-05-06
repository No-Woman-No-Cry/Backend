"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("JobExperienceRequirements", {
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
      job_experience_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "JobExperiences",
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
    await queryInterface.addConstraint("JobExperienceRequirements", {
      type: "foreign key",
      fields: ["job_id"],
      name: "job_experience_requirements_job_id_fkey",
      references: {
        table: "Jobs",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    await queryInterface.addConstraint("JobExperienceRequirements", {
      type: "foreign key",
      fields: ["job_experience_id"],
      name: "job_experience_requirements_job_experience_id_fkey",
      references: {
        table: "JobExperiences",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("JobExperienceRequirements");
  },
};
