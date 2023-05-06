"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("JobSkills", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      skill_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "Skills",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.addConstraint("JobSkills", {
      type: "foreign key",
      fields: ["skill_id"],
      name: "job_skills_skill_id_fkey",
      references: {
        table: "Skills",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    await queryInterface.addConstraint("JobSkills", {
      type: "foreign key",
      fields: ["job_id"],
      name: "job_skills_job_id_fkey",
      references: {
        table: "Jobs",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("JobSkills");
  },
};
