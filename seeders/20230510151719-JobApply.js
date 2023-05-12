'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.sequelize.query(
        `ALTER SEQUENCE "JobApplies_id_seq" RESTART WITH 1`
      );
      await queryInterface.sequelize.query(`DELETE FROM "JobApplies"`);
      await queryInterface.bulkInsert(
        "JobApplies",
        [
        {
          id: 1,
          job_id: 1,
          job_seeker_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          job_id: 2,
          job_seeker_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          job_id: 3,
          job_seeker_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          job_id: 4,
          job_seeker_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          job_id: 5,
          job_seeker_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        }
        ],
      );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("JobApplies", null, {});
  }
};
