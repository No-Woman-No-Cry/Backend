"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `ALTER SEQUENCE "JobTypes_id_seq" RESTART WITH 1`
    );
    await queryInterface.sequelize.query(`DELETE FROM "JobTypes"`);
    await queryInterface.bulkInsert(
      "JobTypes",
      [
        {
          job_type_name: "fulltime",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          job_type_name: "parttime",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          job_type_name: "intern",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          job_type_name: "fulltime",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("JobTypes", null, {});
  },
};
