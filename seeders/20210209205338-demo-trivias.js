'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Trivias",
      [
      {
          question:'apple',
          answer: 'red',
          wrong1: 'green',
          wrong2: 'blue',
          wrong3: 'white',
          createdAt: new Date(),
          updatedAt: new Date(),
          
      },
      {
          question:'mango',
          answer: 'yellow',
          wrong1: 'green',
          wrong2: 'blue',
          wrong3: 'white',
          createdAt: new Date(),
          updatedAt: new Date(),
          
      },
      {
          question:'pear',
          answer: 'red',
          wrong1: 'green',
          wrong2: 'blue',
          wrong3: 'yellow',
          createdAt: new Date(),
          updatedAt: new Date(),
          
      },
    ],
    {}
  );
},

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
