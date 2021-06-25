"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class extract extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      extract.belongsTo(models.user);
    }
  }
  extract.init(
    {
      text: { type: DataTypes.STRING(1000), allowNull: false },
      author: { type: DataTypes.STRING, allowNull: false },
      title: { type: DataTypes.STRING, allowNull: false },
      subtitle: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      tags: {
        type: DataTypes.STRING,
        defaultValue: "",
      },
      page: { type: DataTypes.STRING, defaultValue: "" },
      link: { type: DataTypes.STRING, defaultValue: "" },
      mediaType: DataTypes.ENUM("Book", "Online Article"),
      imageUrl: { type: DataTypes.STRING, defaultValue: "" },
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "extract",
    }
  );
  return extract;
};
