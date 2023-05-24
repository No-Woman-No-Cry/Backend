"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `ALTER SEQUENCE "Companies_id_seq" RESTART WITH 1`
    );
    await queryInterface.sequelize.query(`DELETE FROM "Companies"`);
    await queryInterface.bulkInsert("Companies", [
      {
        company_icon:
          "https://cdn.sejutacita.id/63983cf268e6b200152ce01f/JobPortalCompanyLogo/e0cf7df2-5d72-4370-8d1e-99ebd72189b2.png",
        company_name: "Nomura Research Institute Indonesia",
        description: "IT Services And IT Consulting",
        location: "Jakarta, Indonesia",
        company_size: "50-100 employees",
        email: "info@nri.co.id",
        whatsapp_number: "+6281234567890",
        working_place: "remote",
        website_url: "https://www.nri.co.id/",
        created_at: "2021-01-01 00:00:00",
        updated_at: "2021-01-01 00:00:00",
      },
      {
        company_icon:
          "https://cdn.sejutacita.id/62b56fbba871b9001364b0c6/Others/0458e9f2-91ac-497a-863f-1f9b4a0e15bf.png",
        company_name: "Andalin",
        description: "Freight Forwarding",
        location: "Jakarta Selatan, Indonesia",
        company_size: "50-100 employees",
        email: "sales@andalin.com",
        whatsapp_number: "+6289876543210",
        working_place: "hybird",
        website_url: "https://andalin.com/",
        created_at: "2021-01-01 00:00:00",
        updated_at: "2021-01-01 00:00:00",
      },
      {
        company_icon:
          "https://cdn.sejutacita.id/63a401d9cba906001374ebf6/JobPortalCompanyLogo/43562358-8119-4403-b1d0-fe2b8d51cdcb.png",
        company_name: "JULO",
        description: "Financial Technology",
        location: "Jakarta Selatan, Indonesia",
        company_size: ">100 employees",
        email: "cs@julo.co.id",
        whatsapp_number: "+6281112223333",
        working_place: "hybird",
        website_url: "https://www.julo.co.id/",
        created_at: "2021-01-01 00:00:00",
        updated_at: "2021-01-01 00:00:00",
      },
      {
        company_icon:
          "https://cdn.sejutacita.id/646447cbff4fe80013c49ed7/JobPortalCompanyLogo/c60a017f-1850-45e2-a6ba-9e526195d9ff.jpeg",
        company_name: "VOLIX. Group",
        description: "Media Industry",
        location: "Jakarta Selatan, Indonesia",
        company_size: "1-50 employees",
        email: "contact@volix.co.id",
        whatsapp_number: "081234567890",
        working_place: "remote",
        website_url: "https://volix.co.id/",
        created_at: "2022-05-11 10:00:00",
        updated_at: "2022-05-11 10:00:00",
      },
      {
        company_icon:
          "https://cdn.sejutacita.id/62cba1e34a75530014319545/Others/47efeacd-cda2-4a13-92d8-7e09a17172e2.png",
        company_name: "PT Rect Media Komputindo",
        description: "Teknologi Informasi",
        location: "Semarang, Indonesia",
        company_size: "1-50 employees",
        email: "hi@rectmedia.com",
        whatsapp_number: "081234567891",
        working_place: "onsite",
        website_url: "https://rectmedia.com/",
        created_at: "2022-05-12 11:00:00",
        updated_at: "2022-05-12 11:00:00",
      },
      {
        company_icon:
          "https://cdn.sejutacita.id/63117260c31f9700137c0c46/JobPortalCompanyLogo/e3f0831d-1429-4232-82f1-6683b86ef839.png",
        company_name: "Octopus Indonesia",
        description: "Information Tecnology",
        location: "Jakarta Selatan, Indonesia",
        company_size: "1-50 employees",
        email: "info@octopus.co.id",
        whatsapp_number: "+6281234567890",
        working_place: "onsite",
        website_url: "https://octopus.co.id/",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        company_icon:
          "https://cdn.sejutacita.id/642d049617d0d40013923c88/JobPortalCompanyLogo/a22e0efe-f96f-454a-834e-21b74dd253c2.jpeg",
        company_name: "SG-EDTS",
        description: "IT Services And IT Consulting",
        location: "Jakarta, Indonesia",
        company_size: "- employees",
        email: "info@sg-edts.com",
        whatsapp_number: "+6289876543210",
        working_place: "remote",
        website_url: "https://sg-edts.com/",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        company_icon:
          "https://cdn.sejutacita.id/62bae5028af85b001553f10d/Others/d79b1fd9-ca32-4073-b292-389e8aae9c4d.png",
        company_name: "Virgo",
        description: "Tech Company, Fintech",
        location: "Jakarta Selatan, Indonesia",
        company_size: "50-100 employees",
        email: "cs@virgoku.id",
        whatsapp_number: "+6285678901234",
        working_place: "onsite",
        website_url: "https://virgoku.id/",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        company_icon:
          "https://cdn.sejutacita.id/63983cf268e6b200152ce01f/JobPortalCompanyLogo/a3c10481-d776-4ff5-9b1a-976a4cde92a8.png",
        company_name: "Kalbe Nutritionals (PT Sanghiang Perkasa)",
        description: "Food And Beverage Services",
        location: "Jakarta Utara, Indonesia",
        company_size: ">100 employees",
        email: "customer@kalbenutritionals.com",
        whatsapp_number: "+6280987654321",
        working_place: "onsite",
        website_url: "https://kalbenutritionals.com/id",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        company_icon:
          "https://cdn.sejutacita.id/62a16cc4b9ddc50013847798/Others/e26209b8-a0e5-4998-a559-bb8bd3fa53fa.jpeg",
        company_name: "Hacktiv8 Indonesia",
        description: "Technology Education",
        location: "Jakarta Selatan, Indonesia",
        company_size: "50-100 employees",
        email: "halo@hacktiv8.com",
        whatsapp_number: "+6287654321098",
        working_place: "remote",
        website_url: "https://www.hacktiv8.com/",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Companies", null, {});
  },
};
