'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users',
      [{
        email: 'username1@gmail.com',
        username: 'username1',
        password: '202cb962ac59075b964b07152d234b70',
        //password:123
      },
      {
        email: 'username2@gmail.com',
        username: 'username2',
        password: '900150983cd24fb0d6963f7d28e17f72',
        //password:abc
      },
      ], { timestamps: false });    
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
