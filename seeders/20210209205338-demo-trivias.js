'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Trivias",
      [
      {
          question:'A picture is ____ a thousand words',
          answer: 'worth',
          wrong1: 'credit',
          wrong2: 'good for',
          wrong3: 'merit',
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          
      },
      {
          question:'____ is the best medicine',
          answer: 'laughter',
          wrong1: 'chocolate',
          wrong2: 'dancing',
          wrong3: 'spinach',
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          
      },
      {
          question:'No man is an ____",',
          answer: 'island',
          wrong1: 'igloo',
          wrong2: 'ego',
          wrong3: 'elephant',
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 3,
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
