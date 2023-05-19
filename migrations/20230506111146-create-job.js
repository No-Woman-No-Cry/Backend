"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Jobs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      company_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "Companies",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      job_category_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "JobCategories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      job_position: {
        type: Sequelize.STRING,
      },
      job_salary_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "JobSalaries",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      job_work_place: {
        type: Sequelize.ENUM("onsite", "remote", "hybird"),
      },
      job_description: {
        type: Sequelize.TEXT,
      },
      job_requirements: {
        type: Sequelize.TEXT,
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
    await queryInterface.addConstraint("Jobs", {
      type: "foreign key",
      fields: ["company_id"],
      name: "jobs_company_id_fkey",
      references: {
        table: "Companies",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    await queryInterface.addConstraint("Jobs", {
      type: "foreign key",
      fields: ["job_category_id"],
      name: "jobs_job_category_id_fkey",
      references: {
        table: "JobCategories",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    await queryInterface.addConstraint("Jobs", {
      type: "foreign key",
      fields: ["job_salary_id"],
      name: "jobs_job_salary_id_fkey",
      references: {
        table: "JobSalaries",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Jobs");
  },
};
