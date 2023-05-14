'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.sequelize.query(
      `ALTER SEQUENCE "JobExperiences_id_seq" RESTART WITH 1`
    );
    await queryInterface.sequelize.query(`DELETE FROM "JobExperiences"`);
    await queryInterface.bulkInsert(
      "JobExperiences",
      [
         {
          id: 1,
          job_experience_name: 'fresh_graduate',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          job_experience_name: 'junior',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          job_experience_name: 'middle',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
          job_experience_name: 'senior',
          created_at: new Date(),
          updated_at: new Date()
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("JobExperiences", null, {});
  }
};
