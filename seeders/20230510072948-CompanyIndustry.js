"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `ALTER SEQUENCE "CompanyIndustries_id_seq" RESTART WITH 1`
    );
    await queryInterface.sequelize.query(`DELETE FROM "CompanyIndustries"`);
    await queryInterface.bulkInsert(
      "CompanyIndustries",
      [
        {
          company_id: 1,
          industry_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          company_id: 2,
          industry_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          company_id: 3,
          industry_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          company_id: 4,
          industry_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          company_id: 5,
          industry_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          company_id: 6,
          industry_id: 5,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          company_id: 7,
          industry_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          company_id: 8,
          industry_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          company_id: 9,
          industry_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          company_id: 10,
          industry_id: 4,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("CompanyIndustries", null, {});
  },
};
