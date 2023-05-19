"use strict";
const { hashPassword } = require("../src/utils/password/hashPassword");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const password = await hashPassword("password123");
    await queryInterface.sequelize.query(
      `ALTER SEQUENCE "Employers_id_seq" RESTART WITH 1`
    );
    await queryInterface.sequelize.query(`DELETE FROM "Employers"`);
    return queryInterface.bulkInsert(
      "Employers",
      [
        {
          username: "employer1",
          password: password,
          company_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: "employer2",
          password: password,
          company_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: "employer3",
          password: password,
          company_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: "employer4",
          password: password,
          company_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          username: "employer5",
          password: password,
          company_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Employers", null, {});
  },
};
