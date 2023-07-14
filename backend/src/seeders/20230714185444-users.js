'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users',
      [{
        email: 'username1@gmail.com',
        username: 'username1',
        password: '123',
      },
      {
        email: 'username2@gmail.com',
        username: 'username2',
        password: 'abc',
      },
      ], { timestamps: false });    
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
