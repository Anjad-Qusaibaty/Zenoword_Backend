"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class extag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      extag.belongsTo(models.extract);
      extag.belongsTo(models.tag);
    }
  }
  extag.init(
    {
      extractId: DataTypes.INTEGER,
      tagId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "extag",
    }
  );
  return extag;
};
