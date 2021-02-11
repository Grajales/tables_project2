'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trivias extends Model {

    static associate(models) {
      Trivias.belongsTo(models.User, { foreignKey: "userId" });
      Trivias.belongsToMany(models.Language, {
        through: "LanguageTrivia",
        foreignKey: "triviaId",
        otherKey: "languageId",
      });
    }
  };
  Trivias.init({
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    wrong1: DataTypes.STRING,
    wrong2: DataTypes.STRING,
    wrong3: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Trivias',
  });
  return Trivias;
};