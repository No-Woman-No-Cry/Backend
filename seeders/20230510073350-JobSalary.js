"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `ALTER SEQUENCE "JobSalaries_id_seq" RESTART WITH 1`
    );
    await queryInterface.sequelize.query(`DELETE FROM "JobSalaries"`);
    await queryInterface.bulkInsert(
      "JobSalaries",
      [
        {
          minimum_salary: "Rp. 3.000.000",
          maximum_salary: "Rp. 5.000.000",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          minimum_salary: "Rp. 5.000.000",
          maximum_salary: "Rp. 7.000.000",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          minimum_salary: "Rp. 7.000.000",
          maximum_salary: "Rp. 9.000.000",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          minimum_salary: "Rp. 9.000.000",
          maximum_salary: "Rp. 11.000.000",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          minimum_salary: "Rp. 11.000.000",
          maximum_salary: "Rp. 13.000.000",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          minimum_salary: "Rp. 13.000.000",
          maximum_salary: "Rp. 15.000.000",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          minimum_salary: "Rp. 15.000.000",
          maximum_salary: "Rp. 17.000.000",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          minimum_salary: "Rp. 17.000.000",
          maximum_salary: "Rp. 19.000.000",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          minimum_salary: "Rp. 19.000.000",
          maximum_salary: "Rp. 21.000.000",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          minimum_salary: "Rp. 21.000.000",
          maximum_salary: "Rp. 23.000.000",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("JobSalaries", null, {});
  },
};
