"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `ALTER SEQUENCE "JobSeekers_id_seq" RESTART WITH 1`
    );
    await queryInterface.sequelize.query(`DELETE FROM "JobSeekers"`);
    await queryInterface.bulkInsert(
      "JobSeekers",
      [
        {
          user_id: 1,
          fullname: "Saqfa Alam Suwandi",
          job_seeker_headline: "Front-end developer",
          whatsapp_number: "081288047852",
          linkedin_url: "https://www.linkedin.com/in/saqfaalamsuwandi/",
          portofolio_url: "https://github.com/saqfaalam",
          cv_url:
            "https://drive.google.com/file/d/1GROorYEsB1fT4WHCxM2RVxCt1AqUyB6v/view?usp=drive_link",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 2,
          fullname: "Ridho Pujiono",
          job_seeker_headline: "Full-stack developer",
          whatsapp_number: "081244521578",
          linkedin_url: "https://www.linkedin.com/in/ridho-pujiono-81843221a/",
          portofolio_url: "https://github.com/ridhopujiono",
          cv_url:
            "https://drive.google.com/file/d/1a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p/view",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 3,
          fullname: "Mark Smith",
          job_seeker_headline: "Backend developer",
          whatsapp_number: "081234567890",
          linkedin_url: "https://www.linkedin.com/in/marksmith/",
          portofolio_url: "https://marksmith.github.io/portfolio",
          cv_url:
            "https://drive.google.com/file/d/1a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p/view",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 4,
          fullname: "Emily Johnson",
          job_seeker_headline: "UX designer",
          whatsapp_number: "081234567890",
          linkedin_url: "https://www.linkedin.com/in/emilyjohnson/",
          portofolio_url: "https://emilyjohnson.github.io/portfolio",
          cv_url:
            "https://drive.google.com/file/d/1a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p/view",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          user_id: 5,
          fullname: "Peter Brown",
          job_seeker_headline: "Data analyst",
          whatsapp_number: "081234567890",
          linkedin_url: "https://www.linkedin.com/in/peterbrown/",
          portofolio_url: "https://peterbrown.github.io/portfolio",
          cv_url:
            "https://drive.google.com/file/d/1a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p/view",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("JobSeekers", null, {});
  },
};
