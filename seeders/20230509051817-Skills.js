"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `ALTER SEQUENCE "Skills_id_seq" RESTART WITH 1`
    );
    await queryInterface.sequelize.query(`DELETE FROM "Skills"`);
    let skills = [];
    const skill_name = [
      { skill_name: "JavaScript" },
      { skill_name: "Node.js" },
      { skill_name: "React.js" },
      { skill_name: "Vue.js" },
      { skill_name: "Angular" },
      { skill_name: "PHP" },
      { skill_name: "Laravel" },
      { skill_name: "Symfony" },
      { skill_name: "Java" },
      { skill_name: "Spring" },
      { skill_name: "Python" },
      { skill_name: "Django" },
      { skill_name: "Flask" },
      { skill_name: "Ruby" },
      { skill_name: "Ruby on Rails" },
      { skill_name: "SQL" },
      { skill_name: "NoSQL" },
      { skill_name: "MongoDB" },
      { skill_name: "Firebase" },
      { skill_name: "GraphQL" },
      { skill_name: "REST API" },
      { skill_name: "OAuth" },
      { skill_name: "Git" },
      { skill_name: "AWS" },
      { skill_name: "Azure" },
      { skill_name: "Google Cloud" },
      { skill_name: "Docker" },
      { skill_name: "Kubernetes" },
      { skill_name: "CI/CD" },
      { skill_name: "TDD" },
      { skill_name: "Agile" },
      { skill_name: "Scrum" },
      { skill_name: "Jira" },
      { skill_name: "Confluence" },
      { skill_name: "Photoshop" },
      { skill_name: "Illustrator" },
      { skill_name: "UI/UX Design" },
      { skill_name: "Sketch" },
      { skill_name: "Figma" },
      { skill_name: "InVision" },
      { skill_name: "Adobe XD" },
      { skill_name: "HTML" },
      { skill_name: "CSS" },
      { skill_name: "SASS" },
      { skill_name: "LESS" },
      { skill_name: "Bootstrap" },
      { skill_name: "Materialize" },
      { skill_name: "Tailwind CSS" },
      { skill_name: "Webpack" },
      { skill_name: "Gulp" },
      { skill_name: "Grunt" },
      { skill_name: "NPM" },
      { skill_name: "Yarn" },
      { skill_name: "C++" },
      { skill_name: "C#" },
      { skill_name: "Go" },
      { skill_name: "Rust" },
      { skill_name: "Swift" },
      { skill_name: "Objective-C" },
      { skill_name: "Kotlin" },
      { skill_name: "Scala" },
      { skill_name: "RubyMotion" },
      { skill_name: "Unity" },
      { skill_name: "Unreal Engine" },
      { skill_name: "OpenGL" },
      { skill_name: "OpenCV" },
      { skill_name: "TensorFlow" },
      { skill_name: "PyTorch" },
      { skill_name: "Keras" },
      { skill_name: "Natural Language Processing" },
      { skill_name: "Computer Vision" },
      { skill_name: "Machine Learning" },
      { skill_name: "Data Mining" },
      { skill_name: "Data Analysis" },
      { skill_name: "Data Visualization" },
      { skill_name: "Big Data" },
    ];
    for (let i = 0; i < skill_name.length; i++) {
      skills.push({
        id: i + 1,
        skill_name: skill_name[i].skill_name,
        created_at: new Date(),
        updated_at: new Date(),
      });
    }
    await queryInterface.bulkInsert("Skills", skills, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Skills", null, {});
  },
};
