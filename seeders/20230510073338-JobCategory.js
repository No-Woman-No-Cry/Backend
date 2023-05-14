'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `ALTER SEQUENCE "JobCategories_id_seq" RESTART WITH 1`
    );
    await queryInterface.sequelize.query(`DELETE FROM "JobCategories"`);
    await queryInterface.bulkInsert(
      "JobCategories",
      [
        {
          id: 1,
          category_name: 'IT',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          category_name: 'Marketing',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          category_name: 'Finance',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          category_name: 'Design',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          category_name: 'Sales',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 6,
          category_name: 'Education',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 7,
          category_name: 'Human Resources',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 8,
          category_name: 'Art & Design',
          created_at: new Date(),
          updated_at: new Date(),
        }
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("JobCategories", null, {});
  }
}