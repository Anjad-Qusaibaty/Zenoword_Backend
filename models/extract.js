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
      text: DataTypes.STRING,
      author: DataTypes.STRING,
      title: DataTypes.STRING,
      subtitle: DataTypes.STRING,
      page: DataTypes.STRING,
      link: DataTypes.STRING,
      mediaType: DataTypes.STRING,
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
