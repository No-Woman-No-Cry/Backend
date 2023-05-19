"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `ALTER SEQUENCE "UserSkills_id_seq" RESTART WITH 1`
    );
    await queryInterface.sequelize.query(`DELETE FROM "UserSkills"`);
    await queryInterface.bulkInsert(
      "UserSkills",
      [
        {
          job_seeker_id: 1,
          skill_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          job_seeker_id: 1,
          skill_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          job_seeker_id: 2,
          skill_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("UserSkills", null, {});
  },
};
