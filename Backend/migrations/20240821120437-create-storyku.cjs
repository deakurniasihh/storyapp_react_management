'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable('storyku', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      writer: {
        type: Sequelize.STRING,
        allowNull: false
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false
      },
       story_cover: {
        type: Sequelize.STRING, // Menyimpan URL atau path gambar
        allowNull: true
      },
      keyword: {
        type: Sequelize.STRING, // Menyimpan array keyword sebagai string yang dipisahkan dengan koma
        allowNull: true
      },
      status: {
        type: Sequelize.ENUM('Draft', 'Publish'), // ENUM untuk status
        allowNull: false,
        defaultValue: 'Draft'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('storyku');
  }
};
