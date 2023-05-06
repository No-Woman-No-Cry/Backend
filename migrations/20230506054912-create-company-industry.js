"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("CompanyIndustries", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      company_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "Companies",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      industry_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "Industries",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.addConstraint("CompanyIndustries", {
      type: "foreign key",
      fields: ["company_id"],
      name: "company_industries_company_id_fkey",
      references: {
        table: "Companies",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    await queryInterface.addConstraint("CompanyIndustries", {
      type: "foreign key",
      fields: ["industry_id"],
      name: "company_industries_industry_id_fkey",
      references: {
        table: "Industries",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("CompanyIndustries");
  },
};
