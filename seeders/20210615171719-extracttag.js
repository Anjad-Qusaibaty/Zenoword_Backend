"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "extags",
      [
        {
          extractId: 1,
          tagId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          extractId: 2,
          tagId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          extractId: 3,
          tagId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          extractId: 3,
          tagId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          extractId: 4,
          tagId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          extractId: 4,
          tagId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          extractId: 5,
          tagId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          extractId: 5,
          tagId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          extractId: 6,
          tagId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          extractId: 7,
          tagId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          extractId: 7,
          tagId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          extractId: 8,
          tagId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          extractId: 8,
          tagId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("extags", null, {});
  },
};
