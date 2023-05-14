"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `ALTER SEQUENCE "Benefits_id_seq" RESTART WITH 1`
    );
    await queryInterface.sequelize.query(`DELETE FROM "Benefits"`);
    await queryInterface.bulkInsert(
      "Benefits",
      [
        {
          icon: "https://talent.usedeall.com/BenefitIcons/competitiveSalary.png",
          benefit_name: "Gaji Kompetitif",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          icon: "https://talent.usedeall.com/BenefitIcons/transportation.png",
          benefit_name: "Fasilitas transportasi",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          icon: "https://talent.usedeall.com/BenefitIcons/bonusSystem.png",
          benefit_name: "THR / Sistem Bonus",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          icon: "https://talent.usedeall.com/BenefitIcons/periodLeave.png",
          benefit_name: "Tiket pesawat murah",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          icon: "https://talent.usedeall.com/BenefitIcons/medicalInsurance.png",
          benefit_name: "Asuransi kesehatan",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          icon: "https://talent.usedeall.com/BenefitIcons/employeeDiscounts.png",
          benefit_name: "Diskon Karyawan",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Benefits", null, {});
  },
};
