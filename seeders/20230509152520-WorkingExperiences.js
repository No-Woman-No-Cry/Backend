'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize){
    await queryInterface.sequelize.query(
      `ALTER SEQUENCE "WorkingExperiences_id_seq" RESTART WITH 1`
    );
    await queryInterface.sequelize.query(`DELETE FROM "WorkingExperiences"`);
    await queryInterface.bulkInsert(
      'WorkingExperiences', 
      [
        {
          id: 1,
          job_seeker_id: 1,
          company_name: 'ABC Company',
          position: 'Software Engineer',
          job_desc: 'Developed and maintained company software applications',
          start: '2020-01-01',
          end: '2022-01-01',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          job_seeker_id: 1,
          company_name: 'XYZ Corporation',
          position: 'Web Developer',
          job_desc: 'Designed and developed web applications for clients',
          start: '2018-01-01',
          end: '2019-12-31',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          job_seeker_id: 2,
          company_name: '123 Enterprises',
          position: 'Project Manager',
          job_desc: 'Managed software development projects for clients',
          start: '2019-06-01',
          end: '2021-05-31',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
          job_seeker_id: 3,
          company_name: 'DEF Corporation',
          position: 'Senior Software Engineer',
          job_desc: 'Led development efforts for company flagship product',
          start: '2017-01-01',
          end: '2021-12-31',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 5,
          job_seeker_id: 4,
          company_name: 'GHI Company',
          position: 'Software Developer',
          job_desc: 'Developed and maintained software applications for clients',
          start: '2018-07-01',
          end: '2019-12-31',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 6,
          job_seeker_id: 2,
          company_name: "PT ABC",
          position: "Web Developer",
          job_desc: "Develop and maintain web applications using ReactJS",
          start: "2022-01-01",
          end: "2022-06-30",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 7,
          job_seeker_id: 2,
          company_name: "PT XYZ",
          position: "Software Engineer",
          job_desc: "Develop and maintain software applications using Java",
          start: "2021-07-01",
          end: "2021-12-31",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 8,
          job_seeker_id: 3,
          company_name: "PT MNO",
          position: "Frontend Developer",
          job_desc: "Develop and maintain frontend applications using VueJS",
          start: "2020-10-01",
          end: "2021-05-31",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 9,
          job_seeker_id: 3,
          company_name: "PT PQR",
          position: "Backend Developer",
          job_desc: "Develop and maintain backend applications using NodeJS",
          start: "2019-05-01",
          end: "2020-09-30",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 10,
          job_seeker_id: 4,
          company_name: "PT STU",
          position: "Data Analyst",
          job_desc: "Analyze and interpret data to help the company make data-driven decisions",
          start: "2021-01-01",
          end: "2021-12-31",
          created_at: new Date(),
          updated_at: new Date()
        }
      ], 
    {}
    );
  },

  async down (queryInterface, Sequelize){
    await queryInterface.bulkDelete('WorkingExperiences', null, {});
  }
};