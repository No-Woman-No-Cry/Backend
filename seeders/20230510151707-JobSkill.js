"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `ALTER SEQUENCE "JobSkills_id_seq" RESTART WITH 1`
    );
    await queryInterface.sequelize.query(`DELETE FROM "JobSkills"`);
    await queryInterface.bulkInsert("JobSkills", [
      {
        skill_id: 2,
        job_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        skill_id: 5,
        job_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        skill_id: 7,
        job_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        skill_id: 1,
        job_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        skill_id: 4,
        job_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        skill_id: 8,
        job_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        skill_id: 10,
        job_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        skill_id: 12,
        job_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        skill_id: 3,
        job_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        skill_id: 9,
        job_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("JobSkills", null, {});
  },
};
