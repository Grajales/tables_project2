'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trivia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Trivia.init({
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    wrong1: DataTypes.STRING,
    wrong2: DataTypes.STRING,
    wrong3: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Trivia',
  });
  return Trivia;
};