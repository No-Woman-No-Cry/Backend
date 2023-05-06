"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("UserSkills", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
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
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addConstraint("UserSkills", {
      type: "foreign key",
      fields: ["job_seeker_id"],
      name: "user_skill_job_seeker_id_fkey",
      references: {
        table: "JobSeekers",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    await queryInterface.addConstraint("UserSkills", {
      type: "foreign key",
      fields: ["skill_id"],
      name: "user_skill_skill_id_fkey",
      references: {
        table: "Skills",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("UserSkills");
  },
};
