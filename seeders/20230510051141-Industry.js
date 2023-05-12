'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `ALTER SEQUENCE "Industries_id_seq" RESTART WITH 1`
    );
    await queryInterface.sequelize.query(`DELETE FROM "Industries"`);
    await queryInterface.bulkInsert(
      "Industries",
      [
        {
          id: 1,
          industry_name: 'Agriculture',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          industry_name: 'Fashion',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          industry_name: 'Hospitality',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          industry_name: 'Sports',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          industry_name: 'Automotive',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 6,
          industry_name: 'Creative & Design',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 7,
          industry_name: 'Healthcare',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 8,
          industry_name: 'Renewable Energy',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 9,
          industry_name: 'Banking',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 10,
          industry_name: 'Media',
          created_at: new Date(),
          updated_at: new Date(),
        }
      ],
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Industries", null, {});
  }
};
