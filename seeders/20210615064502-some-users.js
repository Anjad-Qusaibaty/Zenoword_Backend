"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "test user",
          email: "tu@t.com",
          password: bcrypt.hashSync("123", SALT_ROUNDS),
          confirmed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "dummy user",
          email: "du@t.net",
          password: bcrypt.hashSync("321", SALT_ROUNDS),
          confirmed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "test conf",
          email: "conf@conf.com",
          password: bcrypt.hashSync("321", SALT_ROUNDS),
          confirmed: false,
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
