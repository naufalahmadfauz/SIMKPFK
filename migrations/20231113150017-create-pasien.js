'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pasiens', {
      reg: {
        type: Sequelize.STRING,
        allowNull:false,
        primaryKey: true
      },
      nama: {
        type: Sequelize.STRING,
        allowNull:false
      },
      jkn: {
        type: Sequelize.STRING,
        allowNull:false
      },
      alamat: {
        type: Sequelize.STRING,
        allowNull:false
      },
      status: {
        type: Sequelize.STRING,
        allowNull:false
      },
      tinggi_badan:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      berat_badan:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      usia:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      ktp:{
        type: Sequelize.STRING,
        allowNull:true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('pasiens');
  }
};