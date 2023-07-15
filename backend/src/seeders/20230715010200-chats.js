'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('chats',
      [{
        user_id: 1,
        messages: JSON.stringify([
          { date: 'DD/MM/YYYY', user: 'username1', message: 'Hello!' },
          { date: 'DD/MM/YYYY', user: 'username1', message: 'Hello!' },
          { date: 'DD/MM/YYYY', user: 'username1', message: 'Hello!' },
        ])},
      {
        user_id: 1,
        messages: JSON.stringify([
          { 'date': "DD/MM/YYYY", user: 'username1', message: 'Good Morning!' },
        ])},
      {
        user_id: 2,
        messages: JSON.stringify([
          { date: 'DD/MM/YYYY', user: 'username2', message: 'Hi!' },
          { date: 'DD/MM/YYYY', user: 'username2', message: 'Hi!' },
          { date: 'DD/MM/YYYY', user: 'username2', message: 'Hi!' },
        ])},
      ], { timestamps: false }); 
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('chats', null, {});
  }
};
