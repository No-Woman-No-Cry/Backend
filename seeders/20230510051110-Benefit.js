'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
    `ALTER SEQUENCE "Benefits_id_seq" RESTART WITH 1`
    );
    await queryInterface.sequelize.query(`DELETE FROM "Benefits"`);
    await queryInterface.bulkInsert(
      "Benefits",
      [
        {
          id: 1,
          icon: 'fa fa-medkit',
          benefit_name: 'Asuransi kesehatan',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          icon: 'fa fa-car',
          benefit_name: 'Fasilitas transportasi',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          icon: 'fa fa-cutlery',
          benefit_name: 'Makan siang gratis',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
          icon: 'fa fa-laptop',
          benefit_name: 'Laptop dan aksesori gratis',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 5,
          icon: 'fa fa-gamepad',
          benefit_name: 'Area game dan hiburan',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 6,
          icon: 'fa fa-book',
          benefit_name: 'Pelatihan dan pengembangan karyawan',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 7,
          icon: 'fa fa-plane',
          benefit_name: 'Tiket pesawat murah',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 8,
          icon: 'healthcare-icon.png',
          benefit_name: 'Asuransi kesehatan',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 9,
          icon: 'gym-icon.png',
          benefit_name: 'Membership gym gratis',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 10,
          icon: 'training-icon.png',
          benefit_name: 'Pelatihan dan pengembangan',
          created_at: new Date(),
          updated_at: new Date()
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Benefits", null, {});
  }
};
