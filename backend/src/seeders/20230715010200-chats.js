'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('chats',
      [{
        user_id: 1,
        messages: JSON.stringify([
          { date: '17/07/2023 07:50', user: 'username1', message: 'Hi!' },
          { date: '17/07/2023 07:51', user: 'username1', message: 'Hi!' },
          { date: '17/07/2023 07:52', user: 'username1', message: 'Goodbye!' },
        ])},
      {
        user_id: 1,
        messages: JSON.stringify([
          { date: '17/07/2023 08:02', user: 'username1', message: 'Morning!' },
        ])},
      {
        user_id: 2,
        messages: JSON.stringify([
          { date: '17/07/2023 08:02', user: 'username1', message: 'Morning!' },
        ])},
      ], { timestamps: false }); 
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('chats', null, {});
  }
};
