"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `ALTER SEQUENCE "Jobs_id_seq" RESTART WITH 1`
    );
    await queryInterface.sequelize.query(`DELETE FROM "Jobs"`);
    await queryInterface.bulkInsert(
      "Jobs",
      [
        {
          company_id: 1,
          job_category_id: 2,
          job_position: "Software Engineer",
          job_salary_id: 1,
          job_work_place: "onsite",
          job_description:
            "We are looking for a software engineer to join our team!",
          job_requirements:
            "Bachelor’s degree in computer science or related field",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          company_id: 2,
          job_category_id: 3,
          job_position: "Marketing Manager",
          job_salary_id: 2,
          job_work_place: "remote",
          job_description:
            "We are looking for a marketing manager to join our team!",
          job_requirements: "Bachelor’s degree in marketing or related field",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          company_id: 3,
          job_category_id: 1,
          job_position: "Sales Representative",
          job_salary_id: 3,
          job_work_place: "remote",
          job_description:
            "We are looking for a sales representative to join our team!",
          job_requirements: "Bachelor’s degree in business or related field",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          company_id: 4,
          job_category_id: 2,
          job_position: "Frontend Developer",
          job_salary_id: 4,
          job_work_place: "onsite",
          job_description:
            "We are looking for a frontend developer to join our team!",
          job_requirements:
            "Bachelor’s degree in computer science or related field",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          company_id: 5,
          job_category_id: 3,
          job_position: "Social Media Manager",
          job_salary_id: 5,
          job_work_place: "remote",
          job_description:
            "We are looking for a social media manager to join our team!",
          job_requirements: "Bachelor’s degree in marketing or related field",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          company_id: 6,
          job_category_id: 1,
          job_position: "Account Manager",
          job_salary_id: 6,
          job_work_place: "remote",
          job_description:
            "We are looking for an account manager to join our team!",
          job_requirements: "Bachelor’s degree in business or related field",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          company_id: 7,
          job_category_id: 2,
          job_position: "Backend Developer",
          job_salary_id: 7,
          job_work_place: "hybird",
          job_description:
            "We are looking for a backend developer to join our team!",
          job_requirements: "Bachelor’s degree in computer science or related",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          company_id: 5,
          job_category_id: 2,
          job_position: "Data Scientist",
          job_salary_id: 6,
          job_work_place: "hybird",
          job_description:
            "We are looking for a highly skilled data scientist to join our team. The successful candidate will be responsible for analyzing large amounts of raw data, building predictive models, and communicating insights to stakeholders.",
          job_requirements:
            "Requirements: 3+ years of experience in data science, expertise in statistical modeling and machine learning, proficiency in Python and SQL.",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          company_id: 2,
          job_category_id: 1,
          job_position: "Front-end Developer",
          job_salary_id: 3,
          job_work_place: "remote",
          job_description:
            "We are seeking a talented front-end developer to join our team. The successful candidate will be responsible for developing and implementing user interface components using React.js and other modern front-end technologies.",
          job_requirements:
            "Requirements: 2+ years of experience in front-end development, proficiency in HTML, CSS, and JavaScript, experience with React.js and Redux.",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          company_id: 4,
          job_category_id: 3,
          job_position: "Marketing Manager",
          job_salary_id: 7,
          job_work_place: "onsite",
          job_description:
            "We are looking for a creative and results-driven marketing manager to join our team. The successful candidate will be responsible for developing and implementing marketing strategies to promote our brand and products.",
          job_requirements:
            "Requirements: 5+ years of experience in marketing, excellent communication and interpersonal skills, proven track record of developing and executing successful marketing campaigns.",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Jobs", null, {});
  },
};
