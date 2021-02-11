'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Language extends Model {
     static associate(models) {
      Language.belongsToMany(models.Trivias, {
        through: "LanguageTrivia",
        foreignKey: "languageId",
        otherKey: "triviaId",
      });
    }
  };
  Language.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Language',
  });
  return Language;
};