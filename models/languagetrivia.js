'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LanguageTrivia extends Model {
 
    static associate(models) {
      // define association here
    }
  };
  LanguageTrivia.init({
    triviaId: DataTypes.INTEGER,
    languageId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'LanguageTrivia',
  });
  return LanguageTrivia;
};