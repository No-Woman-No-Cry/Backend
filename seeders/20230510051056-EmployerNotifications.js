'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `ALTER SEQUENCE "EmployerNotifications_id_seq" RESTART WITH 1`
      );
      await queryInterface.sequelize.query(`DELETE FROM "EmployerNotifications"`);
      await queryInterface.bulkInsert(
        "EmployerNotifications",
        [
          {
            employer_id: 1,
            notification_message: 'Your job post has been approved',
            notification_date: new Date(),
            is_read: false,
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            employer_id: 2,
            notification_message: 'Your job post has been rejected',
            notification_date: new Date(),
            is_read: false,
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            employer_id: 3,
            notification_message: 'Your job post has received 10 applications',
            notification_date: new Date(),
            is_read: false,
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            employer_id: 1,
            notification_message: 'One of your employees has updated their profile',
            notification_date: new Date(),
            is_read: false,
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            employer_id: 2,
            notification_message: 'Your company has received a new rating',
            notification_date: new Date(),
            is_read: false,
            created_at: new Date(),
            updated_at: new Date()
          }
        ]
      );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("EmployerNotifications", null, {});
  }
};
