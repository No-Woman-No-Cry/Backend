"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `ALTER SEQUENCE "CompanyBenefits_id_seq" RESTART WITH 1`
    );
    await queryInterface.sequelize.query(`DELETE FROM "CompanyBenefits"`);
    await queryInterface.bulkInsert("CompanyBenefits", [
      {
        company_id: 1,
        benefit_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        company_id: 1,
        benefit_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        company_id: 2,
        benefit_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        company_id: 3,
        benefit_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        company_id: 3,
        benefit_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        company_id: 4,
        benefit_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        company_id: 4,
        benefit_id: 4,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("CompanyBenefits", null, {});
  },
};
