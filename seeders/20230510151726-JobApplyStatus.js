"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `ALTER SEQUENCE "JobApplyStatuses_id_seq" RESTART WITH 1`
    );
    await queryInterface.sequelize.query(`DELETE FROM "JobApplyStatuses"`);
    await queryInterface.bulkInsert("JobApplyStatuses", [
      {
        job_apply_id: 1,
        status: "accepted",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        job_apply_id: 2,
        status: "pending",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        job_apply_id: 3,
        status: "accepted",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        job_apply_id: 4,
        status: "rejected",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        job_apply_id: 1,
        status: "rejected",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        job_apply_id: 2,
        status: "pending",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("JobApplyStatuses", null, {});
  },
};
