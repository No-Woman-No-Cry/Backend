'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize){
    await queryInterface.sequelize.query(
      `ALTER SEQUENCE "UserNotifications_id_seq" RESTART WITH 1`
    );
    await queryInterface.sequelize.query(`DELETE FROM "UserNotifications"`);
    await queryInterface.bulkInsert(
      'UserNotifications', 
      [
        {
          user_id: 1,
          notification_message: "Your job application has been accepted.",
          notification_date: "2023-05-10 10:30:00",
          is_read: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          notification_message: "Your subscription will expire in 7 days.",
          notification_date: "2023-05-11 15:00:00",
          is_read: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          notification_message: "You have a new message from your employer.",
          notification_date: "2023-05-10 09:00:00",
          is_read: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 1,
          notification_message: "You have a new job offer from Company X.",
          notification_date: "2023-05-12 16:00:00",
          is_read: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          notification_message: "Your job application has been received!.",
          notification_date: '2023-05-10 12:45:00',
          is_read: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          user_id: 1,
          notification_message: "Your job application has been reviewed!.",
          notification_date: "2023-05-11 10:00:00",
          is_read: false,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          user_id: 3,
          notification_message: "Your job application has been rejected.",
          notification_date: "2023-05-09 15:45:00",
          is_read: true,
          created_at: new Date(),
            updated_at: new Date()
        }
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete("UserNotifications", null, {});
  }
};
