'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `ALTER SEQUENCE "CompanyBenefits_id_seq" RESTART WITH 1`
      );
      await queryInterface.sequelize.query(`DELETE FROM "CompanyBenefits"`);
      await queryInterface.bulkInsert(
        "CompanyBenefits",
        [
          {
            id: 1,
            company_id: 1,
            benefit_id: 1,
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 2,
            company_id: 1,
            benefit_id: 3,
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 3,
            company_id: 2,
            benefit_id: 2,
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 4,
            company_id: 3,
            benefit_id: 1,
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 5,
            company_id: 3,
            benefit_id: 3,
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 6,
            company_id: 4,
            benefit_id: 2,
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: 7,
            company_id: 4,
            benefit_id: 4,
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
      );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("CompanyBenefits", null, {});
  }
}
