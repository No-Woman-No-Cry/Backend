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
          email: "johndoe@example.com",
          password: password,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          email: "janedoe@example.com",
          password: password,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          email: "marksmith@example.com",
          password: password,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          email: "emilyjohnson@example.com",
          password: password,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          email: "peterbrown@example.com",
          password: password,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          email: "lindadavis@example.com",
          password: password,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          email: "michaelwilson@example.com",
          password: password,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          email: "samanthalee@example.com",
          password: password,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          email: "andrewmartinez@example.com",
          password: password,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
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
