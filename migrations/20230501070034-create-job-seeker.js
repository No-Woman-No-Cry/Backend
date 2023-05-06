"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("JobSeekers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      user_id: {
        unique: true,
        allowNull: false,
        type: Sequelize.BIGINT,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      fullname: {
        type: Sequelize.STRING,
      },
      job_seeker_headline: {
        type: Sequelize.STRING,
      },
      whatsapp_number: {
        type: Sequelize.STRING,
      },
      linkedin_url: {
        type: Sequelize.STRING,
      },
      portofolio_url: {
        type: Sequelize.STRING,
      },
      cv_url: {
        type: Sequelize.STRING,
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
    await queryInterface.addConstraint("JobSeekers", {
      type: "foreign key",
      fields: ["user_id"],
      name: "job_seekers_user_id_fkey",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("JobSeekers");
  },
};
