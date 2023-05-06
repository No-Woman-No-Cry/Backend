"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("CompanyBenefits", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      company_id: {
        type: Sequelize.BIGINT,
        references: {
          model: "Companies",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      benefit_id: {
        type: Sequelize.BIGINT,
        references: {
          model: "Benefits",
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
    await queryInterface.addConstraint("CompanyBenefits", {
      type: "foreign key",
      fields: ["company_id"],
      name: "company_benefits_company_id_fkey",
      references: {
        table: "Companies",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    await queryInterface.addConstraint("CompanyBenefits", {
      type: "foreign key",
      fields: ["benefit_id"],
      name: "company_benefits_benefit_id_fkey",
      references: {
        table: "Benefits",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("CompanyBenefits");
  },
};
