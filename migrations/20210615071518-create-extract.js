"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("extracts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      text: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      subtitle: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      page: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      link: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      mediaType: {
        type: Sequelize.ENUM("Book", "Online Article"),
        allowNull: false,
      },
      imageUrl: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      tags: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("extracts");
  },
};
