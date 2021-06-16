"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constraints");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "test user",
          email: "tu@t",
          password: bcrypt.hashSync("123", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "dummy user",
          email: "du@t",
          password: bcrypt.hashSync("321", SALT_ROUNDS),
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
