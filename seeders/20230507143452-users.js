"use strict";
const { hashPassword } = require("../src/utils/password/hashPassword");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const password = await hashPassword("password123");
    await queryInterface.sequelize.query(
      `ALTER SEQUENCE "Users_id_seq" RESTART WITH 1`
    );
    await queryInterface.sequelize.query(`DELETE FROM "Users"`);
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          email: "johndoe@example.com",
          password: password,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          email: "janedoe@example.com",
          password: password,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          email: "marksmith@example.com",
          password: password,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          email: "emilyjohnson@example.com",
          password: password,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          email: "peterbrown@example.com",
          password: password,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 6,
          email: "lindadavis@example.com",
          password: password,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 7,
          email: "michaelwilson@example.com",
          password: password,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 8,
          email: "samanthalee@example.com",
          password: password,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 9,
          email: "andrewmartinez@example.com",
          password: password,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 10,
          email: "sophiataylor@example.com",
          password: password,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
