"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "test user",
          email: "tu@t",
          password: "321",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "dummy user",
          email: "du@t",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
