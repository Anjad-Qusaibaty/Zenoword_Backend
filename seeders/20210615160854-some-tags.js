"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tags",
      [
        {
          type: "Diet",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Keto",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Focus",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Defining Failure",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Insightful",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Energy Consumption",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "We Don't Know",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Amerigo Vespucci",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Attitude",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Life",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Insomnia",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Sorting Arrays",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "JavaScript",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tags", null, {});
  },
};
