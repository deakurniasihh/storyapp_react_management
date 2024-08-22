'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('storyku', [
      {
        title: "The Moon that Can't be Seen",
        writer: "Rara",
        category: "Teen Fiction",
        story_cover: "images/cover.jpg",
        keyword: "school,fiction",
        status: "Draft"
      },
      {
        title: "Given",
        writer: "Sansa S.",
        category: "Romance",
        story_cover: "images/cover.jpg",
        keyword: "music",
        status: "Draft"
      },
      {
        title: "Fish Swimming In The Sky",
        writer: "Keanatria Faly",
        category: "Fantasy",
        story_cover: "images/cover.jpg",
        keyword: "fantasy,romance",
        status: "Publish"
      },
      {
        title: "The Science of Fertility PCOS",
        writer: "Jessie Inchauspé",
        category: "Non Fiction",
        story_cover: "images/cover.jpg",
        keyword: "science,PCOS",
        status: "Publish"
      },
      {
        title: "The Glucose Goddess Method",
        writer: "Jessie Inchauspé",
        category: "Non Fiction",
        story_cover: "images/cover.jpg",
        keyword: "glucose,science",
        status: "Publish"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('storyku', null, {});
  }
};
