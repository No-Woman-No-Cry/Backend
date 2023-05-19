"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `ALTER SEQUENCE "JobCategories_id_seq" RESTART WITH 1`
    );
    await queryInterface.sequelize.query(`DELETE FROM "JobCategories"`);
    await queryInterface.bulkInsert(
      "JobCategories",
      [
        {
          category_name: "IT",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          category_name: "Marketing",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          category_name: "Finance",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          category_name: "Design",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          category_name: "Sales",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          category_name: "Education",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          category_name: "Human Resources",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          category_name: "Art & Design",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("JobCategories", null, {});
  },
};
