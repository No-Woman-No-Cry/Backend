"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `ALTER SEQUENCE "Educations_id_seq" RESTART WITH 1`
    );
    await queryInterface.sequelize.query(`DELETE FROM "Educations"`);
    await queryInterface.bulkInsert("Educations", [
      {
        job_seeker_id: 1,
        name: "Universitas Gadjah Mada",
        degree: "Sarjana",
        major: "Ilmu Komputer",
        start: new Date("2012-09-01"),
        end: new Date("2016-06-30"),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        job_seeker_id: 2,
        name: "Institut Teknologi Bandung",
        degree: "Sarjana",
        major: "Teknik Elektro",
        start: new Date("2014-08-01"),
        end: new Date("2018-07-31"),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        job_seeker_id: 3,
        name: "Universitas Indonesia",
        degree: "Magister",
        major: "Manajemen",
        start: new Date("2017-09-01"),
        end: new Date("2019-12-31"),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        job_seeker_id: 4,
        name: "Universitas Diponegoro",
        degree: "Sarjana",
        major: "Hukum",
        start: new Date("2010-09-01"),
        end: new Date("2014-06-30"),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        job_seeker_id: 5,
        name: "Universitas Brawijaya",
        degree: "Sarjana",
        major: "Akuntansi",
        start: new Date("2013-08-01"),
        end: new Date("2017-07-31"),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Educations", null, {});
  },
};
