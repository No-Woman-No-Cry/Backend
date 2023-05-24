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
        description:
          "NRI Indonesia supports the advancement of clients' Digital Transformation (DX) with our comprehensive services of IT consulting and software development, backed by the knowledge, proven track record and expertise of our parent company, Nomura Research Institute (NRI) Japan. We realize truly meaningful solutions for our clients, and support their growth by seamlessly combining our consulting and tech capabilities. At NRI Indonesia, we strive to solve social issues and contribute to a sustainable future. ",
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
        description:
          "PT. Eximku Teknologi Indonesia (common name: Andalin) is one of FASTEST STARTUP which engages in the field of Cross Border Logistics in Indonesia. We were established in 2016. Andalin is a digital freight forwarder that simplifies the complexity of import and export shipments for companies in Indonesia. Andalin provides a seamless digital freight forwarding experience in every aspect of your logistic needs. Through Andalin’s advanced in-house technology system you can book shipments, receive faster freight quotations, compare services that best suit your needs, as well as manage hundreds of shipments all under one platform with ease. “We don’t merely make products or solutions but we make meaning” Filled with team players from various backgrounds, the key things we have in common are our ability to listen with open mind, endless curiosity and endurance in solving complex problems. All member in Andalin can give idea and creaticity, so all member can make quick decision without permission from Boss/Manager/Supervisor. Thats why we focus to give something meaning and new experience for our employee. ",
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
        description:
          "Sebuah perseroan terbatas yang didirikan berdasarkan hukum negara Republik Indonesia,pada tanggal 20 September 2016, dengan Akta Pendirian No. 47 tanggal 20 September 2016 dan No. NPWP 80 296 556 6015 000. PT Julo Teknologi Perdana berkedudukan di 88@Kasablanka Tower, Jl. Casablanca Raya Kav. 88, Jakarta 12870, Indonesia.",
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
        description:
          "VOLIX is an intellectual property incubation company that aims to push Indonesia's creative industry to a higher level. VOLIX believes in the power of Indonesian creators. VOLIX currently invests and operates various companies from various creative sector. From media to film production. From FnB to fashion. Join us in catalyzing Indonesia’s creative economy.\nFor business inquiries: \n+62 811 131 549 (Mieska Farhana)",
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
        description:
          "RECTmedia adalah perusahaan Creative & Technical Digital Marketing Agency berbasis di Indonesia yang telah bekerja dalam digital transformation dan digital initiative khususnya di sektor Fast Moving Consumer Good dan Financial. \nRECTmedia membantu memaksimalkan potensial perusahaan melalui Digital Strategy, Digital Application, dan Digital Marketing.",
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
        description:
          "Octopus is a circular economy platform that help producers to track & collect their post consumer products for both recyclable and non-recyclable, We verify local waste stakeholders to help Producers identify their EPR strategy.",
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
        description:
          "Since 2019, EDTS has become the Digital Center of Excellence of Salim Group. Equipped with digital and technology experts from various industries, EDTS embark on a journey to help companies harness the power of digital technology to transform their business.",
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
        description:
          "PT. Sanghiang Perkasa, melakukan bisnis sebagai Kalbe Nutritionals adalah salah satu anak perusahaan sebuah perusahaan farmasi terkemuka di Indonesia, PT Kalbe Farma Tbk. Pada awalnya Kalbe Nutritionals didirikan dengan nama PT Sanghiang Perkasa dan perusahaan ini menjalankan bisnisnya di bidang kesehatan.",
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
        description:
          "Hacktiv8 is a “coding bootcamp” that transforms beginners into full-stack developers in 16 weeks. Our immersive onsite program is located in Jakarta, Indonesia. We are working to alleviate the developer crunch in Jakarta with the emerging trend of tech companies and also significantly improve the standard of web developers in Indonesia. We believe anyone can learn to code as long as they fully immerse themselves and follow our 3 agreements of integrity, kindness and whole self. Hacktiv8 has opened its first batch of Data Science Bootcamp where we forge determined young minds to be the future's Data Scientists of Indonesia.",
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
