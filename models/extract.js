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
      extract.belongsToMany(models.tag, {
        through: "extags",
        foreignKey: "extractId",
      });
    }
  }
  extract.init(
    {
      text: { type: DataTypes.STRING, allowNull: false },
      author: { type: DataTypes.STRING, allowNull: false },
      title: { type: DataTypes.STRING, allowNull: false },
      subtitle: {
        type: DataTypes.STRING,
        defaultValue: "n/a",
      },
      page: DataTypes.STRING,
      link: DataTypes.STRING,
      mediaType: DataTypes.ENUM("Book", "Online Article"),
      imageUrl: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "extract",
    }
  );
  return extract;
};
